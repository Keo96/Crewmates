import { createClient } from '@supabase/supabase-js'
const URL = 'https://ykcgfzsvfhcyxuyvxovo.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrY2dmenN2ZmhjeXh1eXZ4b3ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NjQyOTIsImV4cCI6MjAyODU0MDI5Mn0.9U1d4F676dYGYNY6JUY6x-Ztg_a0aa_hJuRKR5vt-QM';

export const supabase = createClient(URL, API_KEY);