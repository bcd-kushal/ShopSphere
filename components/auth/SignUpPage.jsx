"use client"

// importing MaterialUI requirements -----------------------------
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'

// importing components ------------------------------------------
import { Copyright } from '@/components/global/Copyright'
import { useTheme } from '@emotion/react'
import { colors } from '@/themeSettings/theme'

// export component ----------------------------------------------
export default function SignUpPage({ props }) {

    const theme = useTheme()
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
    }

    return (
        <Grid container component="main" sx={{ height: '100dvh' }}>
            <CssBaseline />

            {/* LEFT SIDE BANNER ---------------------------------------------- */}
            <Grid item xs={false} sm={4} md={7} sx={{
                backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) => t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            />

            {/* RIGHT SIDE BANNER --------------------------------------------- */}
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* LOCK ICON ----------- */}
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>

                    {/* Header ------------- */}
                    <Typography component="h1" variant="h3">
                        Sign in
                    </Typography>

                    {/* Form --------------- */}
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: "100%" }}>
                        {/* == NAME =============== */}
                        <TextField margin="normal" required fullWidth name="signup_name" id="signup_name" label="Full Name" autoFocus />
                        <Typography component="h3" variant="h6" color={red[400]} sx={{marginBottom:"8px"}}> Error </Typography>
                        
                        {/* == EMAIL =============== */}
                        <TextField margin="normal" required fullWidth name="signup_email" id="signup_email" label="Email address" autoFocus />
                        <Typography component="h3" variant="h6" color={red[400]} sx={{marginBottom:"8px"}}> Error </Typography>
                        
                        {/* == PASSWORD =============== */}
                        <TextField margin="normal" required fullWidth name="signup_password" id="signup_password" label="Password" type="password" autoFocus />
                        <Typography component="h3" variant="h6" color={red[400]} sx={{marginBottom:"8px"}}> Error </Typography>

                        {/* == MOBILE =============== */}
                        <TextField margin="normal" required fullWidth name="signup_phone" id="signup_phone" label="Mobile number" autoFocus />
                        <Typography component="h3" variant="h6" color={red[400]} sx={{marginBottom:"8px"}}> Error </Typography>
                        
                        {/* == COUNTRY =============== */}
                        <TextField margin="normal" required fullWidth name="signup_country" id="signup_country" label="Country" autoFocus />
                        <Typography component="h3" variant="h6" color={red[400]} sx={{marginBottom:"8px"}}> Error </Typography>

                        {/* == GENDER =============== */}
                        <TextField margin="normal" required fullWidth name="signup_gender" id="signup_gender" label="Gender" autoFocus />
                        <Typography component="h3" variant="h6" color={red[400]} sx={{marginBottom:"8px"}}> Error </Typography>

                        {/* == REMEMBER ME ========== */}
                        <FormControlLabel control={<Checkbox value="remember" sx={{ color: colors.greenAccent[400]}}  />} label="Remember me" />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                            Sign In
                        </Button>

                        {/* == FORGOT PASSWORD + SIGNUP ====== */}
                        <Grid container>
                            <Grid item xs> <Link href="#" variant="body2"> Forgot password? </Link> </Grid>
                            <Grid item> <Link href="#" variant="body2"> {"Don't have an account? Sign Up"} </Link> </Grid>
                        </Grid>

                        {/* == COPYRIGHT ========== */}
                        <Copyright sx={{ mt: 5 }} />
                    </Box>
                    
                </Box>
            </Grid>
        </Grid>
    );
}