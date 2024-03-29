import * as React from "react"
import { DataGrid, GridActionsCellItem, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button, ButtonGroup } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { companyList } from "../../api/company/companyList";
import { useCompanyStore } from "gstore/store";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


interface ICompaniesListProps { }

const CompaniesList: React.FunctionComponent<ICompaniesListProps> = () => {

  const navigate = useNavigate()
  const { setCompanies, companies, deleteCompanyById } = useCompanyStore();
  const [isLoading, setLoading] = React.useState(true);
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    if (companies.length === 0) {
      getCompanies();
    } else {
      setLoading(false);
    }
  }, [companies])

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'companyName', headerName: 'Sirket Adi', width: 130 },
    { field: 'dataName', headerName: 'Veritabani Adi', width: 150 },
    {
      field: 'surname',
      headerName: 'Yetkili Asi',
      // type: 'number',
      width: 150,
    },
    {
      field: 'email',
      headerName: 'E-Mail',
      // description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'district',
      headerName: 'İl/İlçe',
      // description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      // description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(params.row.id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(params.row.id)}
            color="inherit"
          />
        ]
      },
    },
  ];

  const handleEditClick = (id: number) => () => {
    navigate(`/gcloud/companies/edit/${id}`)
  }

  const handleDeleteClick = (id: number) => () => {
    const confirmation = window.confirm("Are you sure you want to delete it?");

    if (confirmation) {
      deleteCompanyById(id);
    }
  }

  // const rows = [
  //   { id: 1, lastName: 'K.', firstName: 'Anadolia', age: 35, company: 'frimex'  },
  //   { id: 2, lastName: 'A.', firstName: 'Anadolia', age: 42, company: 'frimex'  },
  //   { id: 3, lastName: 'S.', firstName: 'Demo', age: 45, company: 'frimex'  },
  //   { id: 4, lastName: 'Q.', firstName: 'GCode', age: 16, company: 'frimex'  },
  //   { id: 5, lastName: 'C.', firstName: 'Green', age: null, company: 'frimex'  },
  //   { id: 6, lastName: 'X.', firstName: "Green", age: 150, company: 'frimex'  },
  //   { id: 7, lastName: 'A.', firstName: 'Halim', age: 44, company: 'frimex'  },
  //   { id: 8, lastName: 'P.', firstName: 'Helena', age: 36, company: 'frimex'  },
  //   { id: 9, lastName: 'A.', firstName: 'Halim', age: 65, company: 'frimex'  },
  // ];

  const getCompanies = () => {
    companyList()?.then((companies: any) => {
      setCompanies(companies);
    }).finally(() => {
      setLoading(false);
    })
  }


  return (
    <>
      <Box>
        <Link to={"/gcloud/companies/add"}>
          <Button
            sx={{ mt: 2, mb: 2, maxWidth: 180 }}
            fullWidth
            color="primary"
            variant="contained"
          >
            Add Company
          </Button>
        </Link>
      </Box>
      <DataGrid
        sx={{ backgroundColor: '#fff' }}
        rows={companies}
        loading={isLoading}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
        pageSizeOptions={[10, 20, 40]}
      />
    </>
  )
}

export default CompaniesList