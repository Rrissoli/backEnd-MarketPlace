const { createClient } = require('@supabase/supabase-js')
const supabase = createClient('https://wiwjwflfqzynoqlpgkcj.supabase.co', process.env.DB_SUPABASE)
module.exports = supabase;