import { createClient } from '@supabase/supabase-js'

const supabase=createClient("https://bcuuaujejbtkybruaafd.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjdXVhdWplamJ0a3licnVhYWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4NDAyNDQsImV4cCI6MjAzODQxNjI0NH0.4PzOk6VzU_2ROiLfFY6IxHCny_URz7F9hozFTxp5drE");

export default supabase;
