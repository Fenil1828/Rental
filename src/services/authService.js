import { supabase } from './supabaseClient';

// Sign up new user
export const signUp = async (email, password, fullName) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

// // Sign in user
// export const signIn = async (email, password) => {
//   try {
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     console.log(signIn)
//     console.log(error);

//     if (error) throw error;
//     return { data, error: null };
//   } catch (error) {
//     return { data: null, error: error.message };
//   }
// };

// Sign in user
export const signIn = async (email, password) => {
  try {
    // Ensure both email and password are provided
    if (!email || !password) {
      throw new Error("Email and password must be provided");
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log("signIn data:", data);
    console.log("signIn error:", error);

    if (error) {
      // You might inspect error.status or error.message for more details
      throw error;
    }

    // On success: return the session/user data
    return { data, error: null };
  } catch (err) {
    // Make sure err.message is available
    const message = err?.message ?? "Unknown error occurred during sign in";
    return { data: null, error: message };
  }
};


// Sign out user
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// Get current user
export const getCurrentUser = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return { user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
};

// Get current session
export const getSession = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) throw error;
    return { session, error: null };
  } catch (error) {
    return { session: null, error: error.message };
  }
};

// Listen to auth state changes
export const onAuthStateChange = (callback) => {
  return supabase.auth.onAuthStateChange(callback);
};