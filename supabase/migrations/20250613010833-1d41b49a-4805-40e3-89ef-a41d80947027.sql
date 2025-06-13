
-- Create hr_user table to store form submissions
CREATE TABLE public.hr_user (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) to the table
ALTER TABLE public.hr_user ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for public form submissions)
CREATE POLICY "Anyone can submit hr_user form" 
  ON public.hr_user 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow admins to view all submissions (optional)
CREATE POLICY "Service role can view all hr_user submissions" 
  ON public.hr_user 
  FOR SELECT 
  USING (auth.role() = 'service_role');
