import { createClient } from "@supabase/supabase-js";



export const supabase = createClient('https://stpdynbbobdrmjlqbyua.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0cGR5bmJib2Jkcm1qbHFieXVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0NDExOTAsImV4cCI6MjA0MzAxNzE5MH0.-TMH5TPbNApu70vhmNmHIwfAY3sJoiTSKgc1KPCVdHY')