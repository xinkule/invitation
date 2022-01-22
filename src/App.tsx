import Content from './components/Content';
import { COMPANY_NAME } from './common/constants';
import './App.css';

function App() {
  return (
    <>
      <header className="fixed-pager top-0 border-0 border-b pl-10">
        <h2 className="text-base md:text-xl m-0">
          {COMPANY_NAME.toUpperCase()}
        </h2>
      </header>
      <main className="py-20 overflow-auto h-full">
        <Content />
      </main>
      <footer className="fixed-pager bottom-0 border-0 border-t flex-col justify-center text-xs md:text-sm">
        <div>Made with ❤ by Albert.</div>
        <div>© 2021 {COMPANY_NAME} All rights reserved.</div>
      </footer>
    </>
  );
}

export default App;
