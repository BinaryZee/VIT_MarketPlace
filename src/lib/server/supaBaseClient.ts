import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'
const supabaseUrl:string = process.env.SUPABASEURL as string;
const supabaseKey:string = process.env.APIKEY as string;
export const supabase = createClient(supabaseUrl, supabaseKey)