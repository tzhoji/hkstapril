import {Outlet} from 'react-router-dom'
import Directory from "../../components/directory/directory.component";
import { Fragment } from "react";

const Home = () => {
  const categories = [
    {
      id: 1001,
      title: "blouse",
      imagefile:
        "https://www.fr76radio.com/wp-content/uploads/2019/06/30555-7abacbde35f382dfbcae2d9e81b7b9f1-768x768.jpg",
    },
    {
      id: 1002,
      title: "headset",
      imagefile:
        "https://tronicsmerch.com/wp-content/uploads/2021/01/1774-ilhton.jpg",
    },
    {
      id: 1003,
      title: "laptop",
      imagefile: "https://images.esellerpro.com/2660/I/327/586/pil_3..jpg",
    },
    {
      id: 1004,
      title: "carbonated",
      imagefile:
        "https://faf.company/wp-content/uploads/2021/05/colapng-768x528.png",
    },
    {
      id: 1005,
      title: "snack",
      imagefile:
        "https://www.ownyoureating.com/wp-content/uploads/2018/07/Protein-travel-snacks-thumbnail-e1532053651743.jpg",
    },
    {
      id: 1006,
      title: "shampoo",
      imagefile: "http://justbeauty-uk.s3.amazonaws.com/OSMO_DMKIT2.jpg",
    },
  ];
    return (
        <div>
            <Outlet />;
            <Directory categories={categories} />;
        </div>
    );

};

export default Home;