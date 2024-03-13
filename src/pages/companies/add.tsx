import * as React from "react"
import * as Yup from "yup"

import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Theme,
  Typography,
  useTheme
} from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
// import { authLogin, authRegister } from "@/redux/auth/services"

// import { LoadingButton } from "@mui/lab"
import { useDispatch } from "react-redux"
import { Formik, useFormik } from "formik"
// import thumbnail from "../../assets/images/placeholder.jpg";

interface ICompaniesAddProps { }

interface IFormikValues {
  company_name: string | null;
  data_name: string;
  surname: string;
  address: string;
  country: string;
  province: string;
  district: string;
  postal_code: string;
  telephone: string;
  fax: string;
  email: string;
  website: string;
  tax_admin: string;
  tax_number: string;
  register_number: string;
  mercy_number: string;
  username: string;
  registration_email: string;
  password: string;
  confirm_password: string;
  value_file: any | null;
}

const CompaniesAdd: React.FunctionComponent<ICompaniesAddProps> = () => {
  const navigate = useNavigate()

  const { values, isSubmitting, errors, touched, handleSubmit, getFieldProps, setFieldValue } =
    useFormik<IFormikValues>({
      validationSchema: Yup.object().shape({
        company_name: Yup.string().required("This field is required!"),
        data_name: Yup.string().required("This field is required!"),
        surname: Yup.string().required("This field is required!"),
        address: Yup.string(),
        country: Yup.string(),
        province: Yup.string(),
        district: Yup.string(),
        postal_code: Yup.string(),
        telephone: Yup.string(),
        fax: Yup.string(),
        email: Yup.string(),
        website: Yup.string(),
        tax_admin: Yup.string(),
        tax_number: Yup.string(),
        register_number: Yup.string(),
        mercy_number: Yup.string(),
        username: Yup.string(),
        registration_email: Yup.string(),
        password: Yup.string(),
        confirm_password: Yup.string(),
        value_file: Yup.mixed(),
      }),
      initialValues: {
        company_name: "",
        data_name: "",
        surname: "",
        address: "",
        country: "",
        province: "",
        district: "",
        postal_code: "",
        telephone: "",
        fax: "",
        email: "",
        website: "",
        tax_admin: "",
        tax_number: "",
        register_number: "",
        mercy_number: "",
        username: "",
        registration_email: "",
        password: "",
        confirm_password: "",
        value_file: "",
      },
      onSubmit: (values, actions) => {
        actions.setSubmitting(true)
        console.log(values);
        navigate("/auth/frimex/login");
      }
    })

  const fileURL = () => {
    console.log(values.value_file)
    return values.value_file?.[0] ? URL.createObjectURL(values.value_file?.[0]) : "/placeholder.jpg";
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Add Company
        </Typography>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>

              <Typography variant="bodyLight" sx={{ display: "block", my: 2 }}>
                Firma Bilgileri
              </Typography>
              <Stack direction="column" spacing={2}>
                <TextField
                  {...getFieldProps("company_name")}
                  label={"Şirket Adı"}
                  error={Boolean(touched.company_name && errors.company_name)}
                  helperText={touched.company_name && errors.company_name}
                />

                <TextField
                  {...getFieldProps("data_name")}
                  label={"Veritabanı Adı"}
                  error={Boolean(touched.data_name && errors.data_name)}
                  helperText={touched.data_name && errors.data_name}
                />

                <TextField
                  {...getFieldProps("surname")}
                  label={"Yetkili Adı- Soyadı"}
                  error={Boolean(touched.surname && errors.surname)}
                  helperText={touched.surname && errors.surname}
                />

                <TextField
                  {...getFieldProps("address")}
                  label={"Açık Adres"}
                  error={Boolean(touched.address && errors.address)}
                  helperText={touched.address && errors.address}
                />

                <TextField
                  {...getFieldProps("country")}
                  label={"Ülke"}
                  error={Boolean(touched.country && errors.country)}
                  helperText={touched.country && errors.country}
                />

                <TextField
                  {...getFieldProps("province")}
                  label={"İl"}
                  error={Boolean(touched.province && errors.province)}
                  helperText={touched.province && errors.province}
                />

                <TextField
                  {...getFieldProps("district")}
                  label={"İlçe"}
                  error={Boolean(touched.district && errors.district)}
                  helperText={touched.district && errors.district}
                />

                <TextField
                  {...getFieldProps("postal_code")}
                  label={"Posta Kodu"}
                  error={Boolean(touched.postal_code && errors.postal_code)}
                  helperText={touched.postal_code && errors.postal_code}
                />

              </Stack>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography variant="bodyLight" sx={{ display: "block", my: 2 }}>
                Diğer Bilgiler
              </Typography>
              <Stack direction="column" spacing={2}>
                <TextField
                  {...getFieldProps("telephone")}
                  label={"Telefon"}
                  error={Boolean(touched.telephone && errors.telephone)}
                  helperText={touched.telephone && errors.telephone}
                />

                <TextField
                  {...getFieldProps("fax")}
                  label={"Faks"}
                  error={Boolean(touched.fax && errors.fax)}
                  helperText={touched.fax && errors.fax}
                />

                <TextField
                  {...getFieldProps("email")}
                  label={"E-mail"}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />

                <TextField
                  {...getFieldProps("website")}
                  label={"Web Adresi"}
                  error={Boolean(touched.website && errors.website)}
                  helperText={touched.website && errors.website}
                />

                <TextField
                  {...getFieldProps("tax_admin")}
                  label={"Vergi Dairesi"}
                  error={Boolean(touched.tax_admin && errors.tax_admin)}
                  helperText={touched.tax_admin && errors.tax_admin}
                />

                <TextField
                  {...getFieldProps("tax_number")}
                  label={"Vergi Numarası"}
                  error={Boolean(touched.tax_number && errors.tax_number)}
                  helperText={touched.tax_number && errors.tax_number}
                />

                <TextField
                  {...getFieldProps("register_number")}
                  label={"Ticaret Sicil No"}
                  error={Boolean(touched.register_number && errors.register_number)}
                  helperText={touched.register_number && errors.register_number}
                />

                <TextField
                  {...getFieldProps("mercy_number")}
                  label={"Mersis No"}
                  error={Boolean(touched.mercy_number && errors.mercy_number)}
                  helperText={touched.mercy_number && errors.mercy_number}
                />

              </Stack>
            </Grid>
            <Grid item xs={6} md={4}>
              <img src={fileURL()} alt="File Image" className="file-thumbnail" />
              <Button
                variant="outlined"
                component="label"
              >
                Upload File
                <input onChange={(event) => setFieldValue('value_file', event.target.files)} type="file" hidden />
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="bodyLight" sx={{ display: "block", my: 2 }}>
          Yönetici Giriş Bilgileri
        </Typography>
        <Box mt={3} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>

              <Stack direction="column" spacing={2}>
                <TextField
                  {...getFieldProps("username")}
                  label={"Adı Soyadı"}
                  error={Boolean(touched.username && errors.username)}
                  helperText={touched.username && errors.username}
                />

                <TextField
                  {...getFieldProps("registration_email")}
                  label={"E-mail"}
                  error={Boolean(touched.registration_email && errors.registration_email)}
                  helperText={touched.registration_email && errors.registration_email}
                />

              </Stack>
            </Grid>
            <Grid item xs={6} md={4}>
              <Stack direction="column" spacing={2}>
                <TextField
                  {...getFieldProps("password")}
                  type="password"
                  label={"Şifre"}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />

                <TextField
                  {...getFieldProps("confirm_password")}
                  type="password"
                  label={"Şifre Tekrar"}
                  error={Boolean(touched.confirm_password && errors.confirm_password)}
                  helperText={touched.confirm_password && errors.confirm_password}
                />

              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="contained"
          sx={{ marginTop: 3 }}
        >
          Add Company
        </Button>
      </form>
    </Box>
  )
}

export default CompaniesAdd
