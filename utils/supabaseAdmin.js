import { supabase } from "@supabase/auth-ui-shared"
import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = "SUPABASE_URL_SECRET"
const SUPABASE_KEY = "SUPABASE KEY"


const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);


const { data, err } = await supabase.auth.signUp({
    email: "am.kushal02@gmail.com",
    password: "git_Hub:for<Kushal$200_02>"
});



supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session);
});

