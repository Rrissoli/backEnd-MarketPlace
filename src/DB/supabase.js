const { createClient } = require('@supabase/supabase-js')
const supabase = createClient('https://wiwjwflfqzynoqlpgkcj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indpd2p3ZmxmcXp5bm9xbHBna2NqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTc0NjQwNCwiZXhwIjoxOTc3MzIyNDA0fQ.NGkmLXtqNnoLC8Cxpxg322ghIJefX4y9eCJOgnil0T0')
module.exports = supabase;