import Link from "next/link"
import { Typography } from "@mui/material"

export function Copyright({props}) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                ShopSphere
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}