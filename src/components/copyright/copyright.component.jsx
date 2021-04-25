import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import packageJson from "../../../package.json";

const Copyright = ({
  website = packageJson.name,
  link = "https://www.engie.fr/",
}) => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link color="inherit" href={link}>
      {website}
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

export default Copyright;
