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
    }
}