import React from 'react';
import '../css/imageList.css'
class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.imageRef = React.createRef();
        this.state = {
            height : 0
        }

    }
    componentDidMount(){
      this.imageRef.current.addEventListener('load' , this.setHeight)
    }
    setHeight = () =>{
       const height = this.imageRef.current.clientHeight ;
       this.setState({height})
        console.log(this.state.height + 'px')

    }
    render(){
     const  {urls , description} = this.props.image;
        return(<div className='item'>
            <img ref={this.imageRef}  src={urls.regular} alt={description}/>
        </div>)
    }
}
export default ImageCard

