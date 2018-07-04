import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

export default class MyCard extends Component {
  static propTypes = {
    // Injected by React Redux
    setLogMsg: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  }

  render() {
    const {data} = this.props
    return (
      <Card style={{width: '100%'}}>
        <CardMedia>
          <img style={{width: '100%'}} src={data.img} alt="my_image" />
        </CardMedia>
        <CardContent>
        <Typography variant="title" component="h2">
            {data? data.title: 'Some Title'}
        </Typography>
          <Typography component="p">
            {data? data.paragraph:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'+
            'Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.'
            }
          </Typography>
        </CardContent>
        <CardActions>
          {data.ready ? <Button href={data.path} size="small" color="primary">查看</Button>
                      : <Button href={data.path} size="small" variant='raised' disabled>頁面建立中</Button>}
        </CardActions>
      </Card>
    )
  }
}
