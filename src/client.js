import { createClient } from '@supabase/supabase-js';

const URL = 'https://cwfhgrwdjgizzjlilltx.supabase.co';
const API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3ZmhncndkamdpenpqbGlsbHR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkxODczMTEsImV4cCI6MjAwNDc2MzMxMX0.nR4S3DB7zrII6LO2cIiMhpYa0uJX3OkdOXtDbMA3qYY';

export const supabase = createClient(URL, API_KEY);
