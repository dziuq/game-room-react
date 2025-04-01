import ReCAPTCHA from "react-google-recaptcha";

const [recaptchaToken, setRecaptchaToken] = useState("");

<ReCAPTCHA
  sitekey="6Le02gYrAAAAAC-TdEgEYepoA_JSthuRNx7NHX9B"
  onChange={token => setRecaptchaToken(token)}
/>