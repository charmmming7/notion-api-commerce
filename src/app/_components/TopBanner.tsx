import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface TopBannerProps {
  onClose: React.MouseEventHandler;
}

const TopBanner = ({ onClose }: TopBannerProps) => {
  return (
    <div className="bg-primary flex items-center justify-center px-4 py-2 text-center text-sm font-medium text-white sm:px-6 lg:px-8">
      <div>
        가을 프로모션을 시작합니다. (8월 26일 ~ 9월 30일)
        <p>
          <span className="opacity-80">
            10만원 이상 결제 시 3천원 추가 적립
          </span>
          <Link href="/#" className="ml-2 underline">
            자세히 보기
          </Link>
        </p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="ml-2"
        aria-label="배너 닫기"
      >
        <XMarkIcon aria-hidden="true" className="h-5 w-5 opacity-90" />
      </button>
    </div>
  );
};

export default TopBanner;
