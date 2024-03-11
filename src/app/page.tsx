import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus sint quae expedita asperiores quia assumenda sapiente, rerum deserunt laborum fugiat nemo, ducimus minima iusto quam molestias nobis architecto placeat iure?</p>
      <Footer/>
    </main>
  );
}
