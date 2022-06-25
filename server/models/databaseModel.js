const { Pool } = require('pg');

const PG_URI = 'postgres://zeaslmhv:RTMhWutr9IMp7zEF4Po6TmQ9BxW_kPV3@heffalump.db.elephantsql.com/zeaslmhv';

const pool = new Pool({
    connectionString: PG_URI
});

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};
