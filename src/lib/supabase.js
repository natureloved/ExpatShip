import { createClient } from '@supabase/supabase-js';

// Fetch the variables from the local Vite environment map.
// We fallback to dummy strings so the client doesn't crash prior to environment loading.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
