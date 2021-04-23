import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const Copyright = ({ website }) => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link color="inherit" href="https://material-ui.com/">
      {website}
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

export default Copyright;
