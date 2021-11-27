import LoadingButton from '@mui/lab/LoadingButton';
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const errorBoxStyles = {
    display: 'flex',
    marginTop: '30px'
}

const postsStyles = {
    width: '100%',
    marginTop: '25px',
    height: 600,
}

export const PostsView = ({loading, error, posts, getData}) => {
    const rows: GridRowsProp = posts;

    const columns: GridColDef[] = [
        { field: 'title', headerName: 'title', flex: 0.3 },
        { field: 'body', headerName: 'body', flex: 1 },
    ];

    return (
        <div>
            <div style={errorBoxStyles}>
                {error &&
                    <Alert sx={{marginRight: '15px'}} severity="error">Error: no internet connection</Alert>
                }
                {loading &&
                    <LoadingButton
                        onClick={getData}
                        loading={loading}
                        loadingIndicator="Loading..."
                        variant="outlined"
                    >
                        Fetch data
                    </LoadingButton>
                }
                {error &&
                    <LoadingButton
                        onClick={getData}
                        loading={loading}
                        loadingIndicator="Loading..."
                        variant="outlined"
                    >
                        Fetch data
                    </LoadingButton>
                }
            </div>
            {!loading && !error &&
                <div style={postsStyles}>
                    <h1>Posts</h1>
                    <DataGrid rows={rows} columns={columns} />
                </div>
            }
        </div>
    )
}