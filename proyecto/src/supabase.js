import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iggutbcxuksqwtiorybq.supabase.co/';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnZ3V0YmN4dWtzcXd0aW9yeWJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNjY3MjMsImV4cCI6MjA2Mzg0MjcyM30.AFMp2ga-jkPVCvnjQI-cfgeZE-hvjGO2jXL_aWiG2NA';
export const supabase = createClient(supabaseUrl, supabaseKey);