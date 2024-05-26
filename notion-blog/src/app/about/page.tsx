import WebIcon from '@mui/icons-material/Web';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import ProfileImage from '../../../public/profile.jpg';

export default function About() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="grid grid-cols-1 py-5 md:py-14">
      <div className="flex flex-col items-center justify-center bg-white rounded-md drop-shadow-md p-6 md:p-20">
        <div className="py-5 md:py-10">
          <Image
            src={ProfileImage}
            width={150}
            height={150}
            alt="Picture of profile"
            className="rounded-full"
          />
        </div>
        <div className="py-10">
          <p className="text-xl font-bold text-center pb-6">
            Taisei Hasegawa <br></br>
            (tortilla)
          </p>
          <p className="text-center text-lg pb-10">
            Thanks for comming my blog ^^
          </p>
          <div className="flex items-center justify-between">
            <a href="https://tortilla.page">
              <WebIcon fontSize="large" />
            </a>
            <a href="https://x.com/tortillataco0">
              <XIcon fontSize="large" />
            </a>
            <a href="mailto:tortillataco00@gmail.com">
              <GitHubIcon fontSize="large" />
            </a>
            <a href="mailto:tortillataco00@gmail.com">
              <EmailIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
