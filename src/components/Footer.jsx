import SocialMedia from './SocialMedia';

export default function Footer() {
  return (
    <footer className="bg-black text-white flex flex-col items-center justify-center gap-4 pb-4">
      <p className="text-center text-blue-800 text-sm">
        If you want to contact me, here are my social networks!
      </p>
      <SocialMedia />
      <div className="text-sm text-center">
        &copy; All Rights Reserved.
      </div>
    </footer>
  );
}
