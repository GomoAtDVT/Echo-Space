import pkg from 'pg';
import { config } from "dotenv";
import "dotenv";

config({ path: "./.env" });
const { Client } = pkg;

const dbClient = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const createTables = async () => {
  try {
    // Users table (for RegisterController, LoginController, ViewProfileController, EditProfileController)
    const createUsersTable = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        display_picture TEXT,
        bio TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Blogs table (for CreateBlogController, AllBlogsController, SingleBlogController, EditBlogController, DeleteBlogController)
    const createBlogsTable = `
      CREATE TABLE IF NOT EXISTS blogs (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        is_deleted BOOLEAN DEFAULT FALSE
      );
    `;

    // Comments table (if needed for future feature)
    const createCommentsTable = `
      CREATE TABLE IF NOT EXISTS comments (
        id SERIAL PRIMARY KEY,
        content TEXT NOT NULL,
        blog_id INTEGER REFERENCES blogs(id) ON DELETE CASCADE,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // User Sessions table (for authentication tokens)
    const createSessionsTable = `
      CREATE TABLE IF NOT EXISTS sessions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        token TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        expires_at TIMESTAMP WITH TIME ZONE NOT NULL
      );
    `;

    // Execute table creation in order (due to foreign key constraints)
    await dbClient.query(createUsersTable);
    console.log('Users table created successfully');
    
    await dbClient.query(createBlogsTable);
    console.log('Blogs table created successfully');
    
    await dbClient.query(createCommentsTable);
    console.log('Comments table created successfully');
    
    await dbClient.query(createSessionsTable);
    console.log('Sessions table created successfully');

    // Create indexes for better query performance
    const createIndexes = `
      CREATE INDEX IF NOT EXISTS idx_blogs_user_id ON blogs(user_id);
      CREATE INDEX IF NOT EXISTS idx_comments_blog_id ON comments(blog_id);
      CREATE INDEX IF NOT EXISTS idx_comments_user_id ON comments(user_id);
      CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);
      CREATE INDEX IF NOT EXISTS idx_sessions_token ON sessions(token);
    `;
    await dbClient.query(createIndexes);
    console.log('Indexes created successfully');

  } catch (error) {
    console.error('Error creating tables:', error);
    throw error;
  }
};

// Connect and create tables
dbClient.connect()
  .then(() => {
    console.log('Connected to database');
    return createTables();
  })
  .catch(error => console.error('Connection error:', error))
  .finally(() => dbClient.end());