import React from 'react';

import { Grid } from '@mui/material';
 
import { SearchBar, VideoDetail } from './components';


import youtube from './api/youtube';


class App extends React.Component {
    state = {
        video: [],
        selectedVideos: null
    }
    handleSubmit = async (searchTerm) =>{
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyD5n2mDxAokbtPoYcTClFBsRbtUdxHvlXU',
                q: searchTerm, 
            }
            });

       this.setState({ videos: response.data.items, selectedVideos: response.data.items[0]} });
    }
    render () {
        return(
            <Grid justify="center" container spacing={16}>
               <Grid item xs={12}>
                    <Grid container spacing={16} >
                        <Grid item xs={12} >
                            <SearchBar onFormSubmit = {this.handleSubmit}  />
                        </Grid>
                        <Grid item xs={8} >
                            <VideoDetail />
                        </Grid>
                        <Grid item xs={4} >

                        </Grid>
                    </Grid>
                </Grid> 
            </Grid>

               )
    }
}

export default App;