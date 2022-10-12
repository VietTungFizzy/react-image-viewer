import React from 'react';
import Gallery from './Gallery/Gallery';
import Modal from './Gallery/Modal/Modal';
import { Route, Routes } from 'react-router-dom';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    placeholderSrc: "/assets/image-1-tiny.jpg",
                    src: "/assets/image-1.jpg"
                },
                {
                    placeholderSrc: "/assets/image-2-tiny.jpg",
                    src: "/assets/image-2.jpg"
                },
                {
                    placeholderSrc: "/assets/image-3-tiny.jpg",
                    src: "/assets/image-3.jpg"
                },
            ]
        }
    }

    render() {
        const { data } = this.state;

        return (
            <Routes>
                <Route path="/" element={<Gallery data={data}/>}>
                    <Route path=":id" element={<Modal />}/>
                </Route>
            </Routes>
        )
    }
}
export default App;