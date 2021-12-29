module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: 'nftapp',
            user: 'admin',
            password: 'admin'
        },
        migrations: {
            directory: './database'
        },
        seeds: {
            directory: './dbBackup'
        }
    },
    production: {
        client: 'pg',
        connection: {
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        },

        migrations: {
            directory: './database'
        },
        seeds: {
            directory: './dbBackup'
        }
    }
}