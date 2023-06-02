import flight from  './flight.png'
import flight1 from  './flight1.png'
import activities from  './activities.png'
import activities1 from  './activities1.png'
import bus from  './bus.png'
import bus1 from  './bus1.png'
import car from  './car.png'
import car1 from  './car1.png'
import charter from  './charter.png'
import charter1 from  './charter1.png'
import forex from  './forex.png'
import forex1 from  './forex1.png'
import homestay  from  './homestay.png'
import homestay1 from  './homestay1.png'
import hotel from  './hotel.png'
import hotel1 from  './hotel1.png'
import package1 from  './package1.png'
import packages from './package.png'
import train from './train.png'
import train1 from './train1.png'



const data={
    activities:(active)=>(active? activities:activities1),
    bus:(active)=>(active?bus:bus1),
    car:(active)=>(active?car:car1),
    charter:(active)=>(active?charter:charter1),
    flight:(active)=>(active?flight:flight1),
    forex:(active)=>(active?forex:forex1),
    homestay:(active)=>(active?homestay:homestay1),
    hotel:(active)=>(active?hotel:hotel1),
    package:(active)=>(active?packages:package1),
    train:(active)=>(active?train:train1),
}
export default data