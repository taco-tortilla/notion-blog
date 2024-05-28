import { Web, Email, X, GitHub } from '@mui/icons-material';
import Image from 'next/image';
import ProfileImage from '../../../../public/profile.jpg';

export default function About() {
  return (
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
              <Web fontSize="large" />
            </a>
            <a href="https://x.com/tortillataco0">
              <X fontSize="large" />
            </a>
            <a href="https://github.com/taco-tortilla">
              <GitHub fontSize="large" />
            </a>
            <a href="mailto:tortillataco00@gmail.com">
              <Email fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
