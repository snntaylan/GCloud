import * as React from "react"
import * as Yup from "yup"

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Theme,
  Typography,
  useTheme
} from "@mui/material"
import { Link, useNavigate, useParams } from "react-router-dom"
// import { authLogin, authRegister } from "@/redux/auth/services"

// import { LoadingButton } from "@mui/lab"
import { useDispatch } from "react-redux"
import { useFormik } from "formik"
import { companies } from "mock-data/companylogos"
import {useAuthStore} from "gstore/store";


interface ILoginPageProps { }

interface IFormikValues {
  email: string
  password: string
  company: string
}

const LoginPage: React.FunctionComponent<ILoginPageProps> = () => {
  const theme = useTheme<Theme>()
  const navigate = useNavigate()
  const { companyName } = useParams();
  const authStore = useAuthStore();


  const { values, isSubmitting, errors, handleChange, touched, handleSubmit, getFieldProps } =
    useFormik<IFormikValues>({
      validationSchema: Yup.object().shape({
        email: Yup.string().email().required("This field is required!"),
        password: Yup.string().required("This field is required!"),
        company: Yup.string(),
      }),
      initialValues: {
        email: "sinan.taylan@gcode.com.tr",
        password: "Pass123$",
        company: companyName || "",
      },
      onSubmit: (values, actions) => {
        actions.setSubmitting(true);
        authStore.setAuthentication({
          ...values,
          name: "Sinan",
          role: "Developer",
        }, "nHQm5qDFgmhmK9A53Z+xnw==");
        if (values.company) {
          navigate("/dashboard/modules");
        } else {
          navigate("/dashboard/companies");
        }
      }
    })

  const currentSelectedCompany = React.useMemo(() => {
    return companies.find(x => x.slug == values.company) || null
  }, [values.company])
  
  React.useEffect(() => {
    if (values.company) {
      navigate(`/auth/${values.company}/login`)
    }
  }, [values.company])

  const isCompanyLogin = React.useMemo(() => {
    return companyName ? true : false;
  }, [companyName])

  return (
    // <PageWrapper title={t("common:login")} bgcolor={theme.palette.common.white}>
    <>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box position={"relative"} component="form" py={15} width={400} onSubmit={handleSubmit}>
          <Typography component="h1" variant="h6" sx={{ mb: 2 }}>
            Login
          </Typography>
          <Typography component="span" sx={{ display: "block", my: 2 }}>
            Sign in with Email
          </Typography>
          <Stack direction="column" spacing={2}>

            {isCompanyLogin && (
              <FormControl fullWidth>
                <InputLabel id="company-label">Company</InputLabel>
                <Select
                  labelId="company-label"
                  id="company"
                  value={values.company}
                  name="company"
                  label="Company"
                  onChange={handleChange}
                >
                  <MenuItem value={""}>-- Select Company --</MenuItem>
                  {companies.map((company) => (
                    <MenuItem value={company.slug}>{company.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}

            <TextField
              InputLabelProps={{
                shrink: true
              }}
              {...getFieldProps("email")}
              label={"Email"}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              InputLabelProps={{
                shrink: true
              }}
              {...getFieldProps("password")}
              label={"Passowrd"}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              type="password"
            />

          </Stack>
          {isCompanyLogin && (
            <Box className="logo-wrapper">
              <img src={currentSelectedCompany?.logo} alt="Logo" />
            </Box>
          )}
          <Button
            sx={{ mt: 8 }}
            fullWidth
            color="primary"
            variant="contained"
            type="submit"
          >
            {"Login"}
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default LoginPage