import bg from "./assets/bg.png"
import './App.css';
import ItemCard from "./components/ItemCard";
import itembg1 from "./assets/bg-1.png";
import itembg2 from "./assets/bg-1-1.png";
import itembg3 from "./assets/bg-1-2.png";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    let isDown = false;
    let startX;
    let scrollLeft;
    const slider = document.querySelector('.items');

    const end = () => {
      isDown = false;
      slider.classList.remove('active');
    }

    const start = (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    }

    const move = (e) => {
      if (!isDown) return;

      e.preventDefault();
      const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
      const dist = (x - startX);
      slider.scrollLeft = scrollLeft - dist;
    }

    (() => {
      if (slider) {
        slider.addEventListener('mousedown', start);
        slider.addEventListener('touchstart', start);

        slider.addEventListener('mousemove', move);
        slider.addEventListener('touchmove', move);

        slider.addEventListener('mouseleave', end);
        slider.addEventListener('mouseup', end);
        slider.addEventListener('touchend', end);
      }
    })();

  }, [])


  return (
    <div className="content">
      <div className="bgimg">
        <img src={bg} alt="background" />
      </div>
      <div className="rightContent">
        <div className="center">
          <h1>Everyday items, we have something to suit every occasion.</h1>
          <h2>At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.</h2>
          <button>Shop all everyday items</button>
        </div>
        <div className="main">
          <div class="wrapper">
            <ul class="items">
              <ItemCard bg={itembg1} title={"365 Signature Hoodie"} price="33.95" />
              <ItemCard bg={itembg1} title={"365 Signature Hoodie"} price="33.95" />
              <ItemCard bg={itembg1} title={"365 Signature Hoodie"} price="33.95" />
              <ItemCard bg={itembg1} title={"365 Signature Hoodie"} price="33.95" />
              <ItemCard bg={itembg1} title={"365 Signature Hoodie"} price="33.95" />
              <ItemCard bg={itembg1} title={"365 Signature Hoodie"} price="33.95" />
              <ItemCard bg={itembg1} title={"365 Signature Hoodie"} price="33.95" />
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
