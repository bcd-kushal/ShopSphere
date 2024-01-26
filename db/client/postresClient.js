import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_KEY
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY


const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
// console.log('Supabase Instance: ', supabase);

export default supabase;