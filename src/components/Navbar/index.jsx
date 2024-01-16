import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <header>
        <div className="imgPavanmg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="97"
          height="59"
          viewBox="0 0 97 59"
          fill="none"
        >
          <g clip-path="url(#clip0_21_17)">
            <path
              d="M12.5581 0V3.83066C11.5028 3.83066 10.6796 3.98157 10.0882 4.28338C9.49679 4.57357 9.24169 5.15977 9.32287 6.04199L9.86206 11.1785C10.0012 12.4786 9.85626 13.5292 9.42722 14.3301C9.00978 15.131 8.36623 15.7464 7.49655 16.1758C6.63848 16.5938 5.62386 16.8897 4.45271 17.0638C5.69343 17.2495 6.74284 17.5514 7.60092 17.9693C8.45899 18.3871 9.08516 18.9907 9.47941 19.7801C9.87366 20.5695 10.0012 21.6258 9.86206 22.9492L9.32287 28.0857C9.24169 28.9679 9.49679 29.5541 10.0882 29.8443C10.6796 30.146 11.5028 30.297 12.5581 30.297V34.1277C9.35765 34.1277 7.1081 33.6401 5.80939 32.6651C4.52229 31.7016 4.00048 30.0475 4.24398 27.7026L4.76579 22.7227C4.85856 21.8406 4.70782 21.1499 4.31357 20.6507C3.93091 20.1516 3.36272 19.8033 2.60901 19.6059C1.85529 19.3971 0.985626 19.2926 0 19.2926V14.8351C0.97403 14.8351 1.8379 14.7364 2.59162 14.5391C3.34533 14.3301 3.91932 13.9761 4.31357 13.477C4.70782 12.9778 4.85856 12.2871 4.76579 11.4049L4.24398 6.45987C3.98889 4.06861 4.51068 2.39706 5.80939 1.4452C7.1081 0.481734 9.35765 0 12.5581 0Z"
              fill="url(#paint0_linear_21_17)"
            />
            <path
              d="M27.633 4.50977C30.5087 4.50977 32.6771 5.62414 34.1381 7.85288C35.6108 10.07 36.3471 13.1636 36.3471 17.1335C36.3471 21.115 35.6108 24.2318 34.1381 26.4838C32.6771 28.7242 30.5087 29.8443 27.633 29.8443C24.7342 29.8443 22.5541 28.7242 21.0931 26.4838C19.6436 24.2318 18.9189 21.115 18.9189 17.1335C18.9189 13.1636 19.6436 10.07 21.0931 7.85288C22.5541 5.62414 24.7342 4.50977 27.633 4.50977ZM27.633 8.49713C26.4039 8.49713 25.5052 9.15879 24.937 10.4821C24.3689 11.7938 24.0847 14.0109 24.0847 17.1335C24.0847 18.1551 24.1022 19.0663 24.1369 19.8672C24.1718 20.6566 24.224 21.3589 24.2935 21.9741L30.1724 9.66374C29.8942 9.22264 29.5463 8.92083 29.1289 8.75831C28.7231 8.5842 28.2244 8.49713 27.633 8.49713ZM31.1465 17.1335C31.1465 15.7986 31.1175 14.6726 31.0595 13.7555L25.511 25.2302C25.7662 25.4739 26.0676 25.6422 26.4154 25.7351C26.775 25.8279 27.1808 25.8744 27.633 25.8744C28.4564 25.8744 29.1231 25.5958 29.6333 25.0387C30.1551 24.4815 30.5377 23.5644 30.7812 22.2875C31.0248 20.999 31.1465 19.281 31.1465 17.1335Z"
              fill="url(#paint1_linear_21_17)"
            />
            <path
              d="M48.5 4.50977C51.3757 4.50977 53.5441 5.62414 55.0051 7.85288C56.4778 10.07 57.214 13.1636 57.214 17.1335C57.214 21.115 56.4778 24.2318 55.0051 26.4838C53.5441 28.7242 51.3757 29.8443 48.5 29.8443C45.601 29.8443 43.4211 28.7242 41.9601 26.4838C40.5106 24.2318 39.7859 21.115 39.7859 17.1335C39.7859 13.1636 40.5106 10.07 41.9601 7.85288C43.4211 5.62414 45.601 4.50977 48.5 4.50977ZM48.5 8.49713C47.2709 8.49713 46.3722 9.15879 45.804 10.4821C45.2359 11.7938 44.9518 14.0109 44.9518 17.1335C44.9518 18.1551 44.9692 19.0663 45.0039 19.8672C45.0387 20.6566 45.0909 21.3589 45.1605 21.9741L51.0394 9.66374C50.7611 9.22264 50.4132 8.92083 49.9959 8.75831C49.5899 8.5842 49.0913 8.49713 48.5 8.49713ZM52.0135 17.1335C52.0135 15.7986 51.9845 14.6726 51.9265 13.7555L46.378 25.2302C46.633 25.4739 46.9346 25.6422 47.2825 25.7351C47.642 25.8279 48.0478 25.8744 48.5 25.8744C49.3233 25.8744 49.99 25.5958 50.5003 25.0387C51.022 24.4815 51.4047 23.5644 51.6482 22.2875C51.8917 20.999 52.0135 19.281 52.0135 17.1335Z"
              fill="url(#paint2_linear_21_17)"
            />
            <path
              d="M68.1146 29.8095L62.8966 28.1902L71.889 9.26321H61.2964V5.11914H77.4549V8.84532L68.1146 29.8095Z"
              fill="url(#paint3_linear_21_17)"
            />
            <path
              d="M84.442 0C87.6423 0 89.8861 0.481734 91.1733 1.4452C92.472 2.40867 92.9996 4.06862 92.7561 6.42505L92.2342 11.4049C92.1414 12.2871 92.2922 12.9778 92.6865 13.477C93.0807 13.9761 93.6488 14.3301 94.391 14.5391C95.1447 14.7364 96.0144 14.8351 97 14.8351V19.2926C96.026 19.2926 95.1622 19.3971 94.4084 19.6059C93.6547 19.8033 93.0807 20.1516 92.6865 20.6507C92.2922 21.1499 92.1414 21.8406 92.2342 22.7227L92.7561 27.6678C93.0228 30.0475 92.5009 31.719 91.1906 32.6824C89.8919 33.646 87.6423 34.1277 84.442 34.1277V30.297C85.5088 30.297 86.3379 30.146 86.9292 29.8443C87.5207 29.5541 87.7699 28.9679 87.6772 28.0857L87.1379 22.9492C86.9988 21.6374 87.1379 20.5868 87.5554 19.7976C87.9844 18.9965 88.6338 18.3871 89.5035 17.9693C90.3731 17.5397 91.3935 17.238 92.5647 17.0638C91.3239 16.8781 90.2688 16.5763 89.3991 16.1584C88.541 15.7405 87.9149 15.1369 87.5207 14.3476C87.1264 13.5466 86.9988 12.4903 87.1379 11.1785L87.6772 6.04199C87.7699 5.15977 87.5148 4.57357 86.9119 4.28338C86.3204 3.98157 85.4972 3.83066 84.442 3.83066V0Z"
              fill="url(#paint4_linear_21_17)"
            />
            <path
              d="M12.2745 42.1621C13.2416 42.1621 14.0208 42.4024 14.6121 42.883C15.2036 43.3635 15.6349 44.0426 15.9063 44.9202C16.1845 45.7977 16.3238 46.839 16.3238 48.0439C16.3238 49.1862 16.1568 50.2065 15.8228 51.1049C15.4888 51.9964 15.0053 52.6999 14.3722 53.2153C13.739 53.7238 12.9703 53.978 12.0658 53.978C10.9874 53.978 10.1108 53.5914 9.43591 52.8182V57.9061L6.13812 58.2509V42.5278H9.06022L9.20633 43.771C9.65856 43.1929 10.1525 42.782 10.6882 42.5382C11.224 42.2875 11.7527 42.1621 12.2745 42.1621ZM11.2518 44.5964C10.8691 44.5964 10.5317 44.7113 10.2395 44.9411C9.94729 45.1709 9.67942 45.4843 9.43591 45.8813V50.5617C9.66551 50.903 9.90554 51.1537 10.156 51.3139C10.4134 51.474 10.7161 51.5542 11.0639 51.5542C11.6484 51.5542 12.1041 51.2895 12.4311 50.7601C12.7581 50.2238 12.9215 49.3325 12.9215 48.0857C12.9215 47.1663 12.8555 46.456 12.7232 45.9545C12.5911 45.4461 12.3998 45.0943 12.1493 44.8993C11.8988 44.6973 11.5997 44.5964 11.2518 44.5964Z"
              fill="url(#paint5_linear_21_17)"
            />
            <path
              d="M27.9882 50.4259C27.9882 50.8437 28.0438 51.1467 28.1552 51.3348C28.2734 51.5228 28.4613 51.6657 28.7186 51.7631L28.0404 53.9362C27.3863 53.8735 26.8333 53.7307 26.3809 53.5078C25.9357 53.278 25.5844 52.9332 25.3269 52.4736C24.9026 52.982 24.3599 53.3615 23.6989 53.6123C23.038 53.856 22.3632 53.978 21.6743 53.978C20.5333 53.978 19.6219 53.6541 18.94 53.0063C18.2652 52.3517 17.9278 51.5124 17.9278 50.4886C17.9278 49.2837 18.3974 48.3538 19.3366 47.6991C20.2828 47.0445 21.6117 46.7172 23.3232 46.7172H24.8155V46.2992C24.8155 45.164 24.0851 44.5964 22.6239 44.5964C22.2692 44.5964 21.8134 44.6486 21.2569 44.7531C20.7003 44.8505 20.1437 44.9932 19.5871 45.1813L18.8252 42.9875C19.5419 42.7159 20.2864 42.5103 21.0586 42.3711C21.8378 42.2318 22.5336 42.1621 23.1458 42.1621C24.7947 42.1621 26.0122 42.4999 26.7984 43.1754C27.5916 43.8441 27.9882 44.8122 27.9882 46.0798V50.4259ZM22.8118 51.6169C23.1667 51.6169 23.5389 51.5124 23.9285 51.3034C24.3181 51.0876 24.6138 50.7846 24.8155 50.3946V48.5977H24.0016C23.0832 48.5977 22.4083 48.7404 21.977 49.0259C21.5456 49.3045 21.3299 49.7155 21.3299 50.2588C21.3299 50.6836 21.4586 51.0179 21.7161 51.2616C21.9804 51.4985 22.3457 51.6169 22.8118 51.6169Z"
              fill="url(#paint6_linear_21_17)"
            />
            <path
              d="M41.6355 42.5276L37.9411 53.6225H34.0589L30.3227 42.5276H33.8815L36.0418 51.0943L38.2958 42.5276H41.6355Z"
              fill="url(#paint7_linear_21_17)"
            />
            <path
              d="M53.0286 50.4259C53.0286 50.8437 53.0842 51.1467 53.1956 51.3348C53.3138 51.5228 53.5017 51.6657 53.759 51.7631L53.0808 53.9362C52.4267 53.8735 51.8737 53.7307 51.4214 53.5078C50.9761 53.278 50.6248 52.9332 50.3673 52.4736C49.943 52.982 49.4003 53.3615 48.7393 53.6123C48.0784 53.856 47.4036 53.978 46.7147 53.978C45.5737 53.978 44.6623 53.6541 43.9804 53.0063C43.3056 52.3517 42.9682 51.5124 42.9682 50.4886C42.9682 49.2837 43.4379 48.3538 44.377 47.6991C45.3232 47.0445 46.6521 46.7172 48.3636 46.7172H49.8559V46.2992C49.8559 45.164 49.1255 44.5964 47.6645 44.5964C47.3096 44.5964 46.8538 44.6486 46.2973 44.7531C45.7407 44.8505 45.1841 44.9932 44.6275 45.1813L43.8658 42.9875C44.5823 42.7159 45.3268 42.5103 46.099 42.3711C46.8783 42.2318 47.574 42.1621 48.1862 42.1621C49.8351 42.1621 51.0526 42.4999 51.8388 43.1754C52.632 43.8441 53.0286 44.8122 53.0286 46.0798V50.4259ZM47.8522 51.6169C48.2071 51.6169 48.5793 51.5124 48.9689 51.3034C49.3585 51.0876 49.6542 50.7846 49.8559 50.3946V48.5977H49.042C48.1236 48.5977 47.4487 48.7404 47.0174 49.0259C46.5861 49.3045 46.3703 49.7155 46.3703 50.2588C46.3703 50.6836 46.4991 51.0179 46.7565 51.2616C47.0208 51.4985 47.3861 51.6169 47.8522 51.6169Z"
              fill="url(#paint8_linear_21_17)"
            />
            <path
              d="M56.2189 53.6227V42.5278H59.0993L59.3289 43.8128C59.8229 43.2556 60.3446 42.8412 60.8943 42.5696C61.4439 42.2979 62.0701 42.1621 62.7728 42.1621C63.7189 42.1621 64.4634 42.4511 65.0061 43.0293C65.5487 43.6074 65.82 44.4222 65.82 45.4739V53.6227H62.5223V46.4246C62.5223 45.7421 62.4458 45.2685 62.2927 45.0037C62.1466 44.7322 61.8683 44.5964 61.4577 44.5964C61.1099 44.5964 60.776 44.7077 60.4559 44.9307C60.1428 45.1535 59.8297 45.4634 59.5168 45.8604V53.6227H56.2189Z"
              fill="url(#paint9_linear_21_17)"
            />
            <path
              d="M76.9314 42.1621C77.7175 42.1621 78.2985 42.4199 78.6742 42.9353C79.0568 43.4436 79.2481 44.269 79.2481 45.4112V53.6227H76.42V45.7873C76.42 45.3973 76.3817 45.1222 76.3052 44.962C76.2356 44.8017 76.0895 44.7217 75.8669 44.7217C75.693 44.7217 75.512 44.774 75.3242 44.8784C75.1433 44.9759 74.9416 45.164 74.719 45.4425V53.6227H72.4022V45.7873C72.4022 45.3973 72.3638 45.1222 72.2873 44.962C72.2177 44.8017 72.0716 44.7217 71.849 44.7217C71.6751 44.7217 71.4942 44.774 71.3063 44.8784C71.1254 44.9759 70.9237 45.164 70.7011 45.4425V53.6227H67.8311V42.5278H70.2523L70.4715 43.6038C70.8193 43.1302 71.1707 42.7715 71.5255 42.5278C71.8803 42.284 72.3012 42.1621 72.7883 42.1621C73.2057 42.1621 73.5605 42.27 73.8527 42.486C74.152 42.695 74.3641 43.0257 74.4894 43.4784C74.8233 43.0884 75.1921 42.7715 75.5955 42.5278C75.9991 42.284 76.4443 42.1621 76.9314 42.1621Z"
              fill="url(#paint10_linear_21_17)"
            />
            <path
              d="M91.1004 40.7517L91.8728 43.1754C91.4832 43.3287 91.0274 43.4401 90.5057 43.5097C89.9838 43.5794 89.3751 43.6142 88.6794 43.6142C89.3751 43.9137 89.9038 44.2863 90.2656 44.7321C90.6344 45.1708 90.8187 45.7489 90.8187 46.4664C90.8187 47.1837 90.6274 47.8245 90.2448 48.3886C89.862 48.9458 89.3195 49.3846 88.6168 49.705C87.9141 50.0254 87.0826 50.1856 86.1225 50.1856C85.6633 50.1856 85.2354 50.1438 84.8389 50.0602C84.7205 50.1229 84.6302 50.2133 84.5676 50.3318C84.5049 50.4502 84.4736 50.5721 84.4736 50.6975C84.4736 50.8716 84.5431 51.0283 84.6824 51.1675C84.8285 51.3069 85.1659 51.3765 85.6946 51.3765H87.5105C88.3732 51.3765 89.1176 51.5158 89.7438 51.7944C90.3769 52.0729 90.8674 52.4526 91.2153 52.9331C91.5631 53.4137 91.7371 53.964 91.7371 54.5839C91.7371 55.7191 91.2397 56.6141 90.2448 57.2688C89.2498 57.9234 87.7714 58.2509 85.8094 58.2509C84.3901 58.2509 83.2908 58.1046 82.5117 57.812C81.7393 57.5265 81.2002 57.1156 80.8941 56.5792C80.5949 56.0499 80.4453 55.4196 80.4453 54.6882H83.3673C83.3673 55.0087 83.43 55.2699 83.5552 55.4718C83.6874 55.6808 83.9344 55.8341 84.2962 55.9315C84.6649 56.029 85.1972 56.0778 85.8929 56.0778C86.5956 56.0778 87.1313 56.022 87.5 55.9107C87.8688 55.7992 88.1192 55.646 88.2515 55.4509C88.3906 55.2629 88.4602 55.0505 88.4602 54.8136C88.4602 54.4863 88.3314 54.2217 88.0741 54.0197C87.8166 53.8177 87.4097 53.7167 86.853 53.7167H85.0893C83.8926 53.7167 83.0229 53.4973 82.4803 53.0585C81.9376 52.6128 81.6663 52.0938 81.6663 51.5019C81.6663 51.091 81.7741 50.701 81.9898 50.3318C82.2124 49.9627 82.5221 49.6527 82.9187 49.402C82.209 49.0258 81.701 48.5836 81.3949 48.0752C81.0888 47.5598 80.9358 46.9434 80.9358 46.226C80.9358 45.3902 81.148 44.6729 81.5724 44.0739C81.9968 43.4679 82.5811 43.0013 83.3256 42.674C84.077 42.3467 84.9329 42.1829 85.8929 42.1829C86.7208 42.1968 87.441 42.1412 88.0532 42.0158C88.6654 41.8834 89.2151 41.7059 89.7021 41.4829C90.189 41.2531 90.6552 41.0093 91.1004 40.7517ZM85.9764 44.3246C85.4546 44.3246 85.0406 44.4918 84.7345 44.8262C84.4283 45.1535 84.2753 45.6062 84.2753 46.1843C84.2753 46.7971 84.4319 47.2673 84.745 47.5946C85.058 47.9219 85.4686 48.0857 85.9764 48.0857C87.1034 48.0857 87.667 47.4379 87.667 46.1425C87.667 44.9306 87.1034 44.3246 85.9764 44.3246Z"
              fill="url(#paint11_linear_21_17)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_21_17"
              x1="-2.05005"
              y1="36.7549"
              x2="99.9719"
              y2="0.679714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00C0FD" />
              <stop offset="1" stop-color="#E70FAA" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_21_17"
              x1="-2.05004"
              y1="36.755"
              x2="99.972"
              y2="0.679755"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00C0FD" />
              <stop offset="1" stop-color="#E70FAA" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_21_17"
              x1="-2.05007"
              y1="36.755"
              x2="99.9719"
              y2="0.679757"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00C0FD" />
              <stop offset="1" stop-color="#E70FAA" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_21_17"
              x1="-2.05005"
              y1="36.7549"
              x2="99.9719"
              y2="0.679708"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00C0FD" />
              <stop offset="1" stop-color="#E70FAA" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_21_17"
              x1="-2.05002"
              y1="36.7549"
              x2="99.972"
              y2="0.679722"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00C0FD" />
              <stop offset="1" stop-color="#E70FAA" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_21_17"
              x1="-0.24442"
              y1="59.3455"
              x2="93.6381"
              y2="39.507"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#13B0F5" />
              <stop offset="1" stop-color="#CA24B4" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_21_17"
              x1="-0.244449"
              y1="59.3455"
              x2="93.638"
              y2="39.507"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#13B0F5" />
              <stop offset="1" stop-color="#CA24B4" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_21_17"
              x1="-0.244431"
              y1="59.3453"
              x2="93.6381"
              y2="39.5068"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#13B0F5" />
              <stop offset="1" stop-color="#CA24B4" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_21_17"
              x1="-0.2444"
              y1="59.3455"
              x2="93.6381"
              y2="39.507"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#13B0F5" />
              <stop offset="1" stop-color="#CA24B4" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_21_17"
              x1="-0.244434"
              y1="59.3455"
              x2="93.6381"
              y2="39.507"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#13B0F5" />
              <stop offset="1" stop-color="#CA24B4" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_21_17"
              x1="-0.244412"
              y1="59.3455"
              x2="93.638"
              y2="39.507"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#13B0F5" />
              <stop offset="1" stop-color="#CA24B4" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_21_17"
              x1="-0.244413"
              y1="59.3454"
              x2="93.6381"
              y2="39.5069"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#13B0F5" />
              <stop offset="1" stop-color="#CA24B4" />
            </linearGradient>
            <clipPath id="clip0_21_17">
              <rect width="97" height="59" fill="white" />
            </clipPath>
          </defs>
        </svg>{" "}
        </div>
        <div className="listNavbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Tech Stack</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        
        <div className="iconLinks">
        {/* TWITTER ICON */}
        <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
        >
          <path
            d="M15.875 0.875C7.59152 0.875 0.875 7.59152 0.875 15.875C0.875 24.1585 7.59152 30.875 15.875 30.875C24.1585 30.875 30.875 24.1585 30.875 15.875C30.875 7.59152 24.1585 0.875 15.875 0.875ZM23.0837 12.1819C23.0937 12.3393 23.0937 12.5033 23.0937 12.6641C23.0937 17.5792 19.3504 23.2411 12.51 23.2411C10.4007 23.2411 8.44531 22.6283 6.79799 21.5737C7.09933 21.6071 7.38728 21.6205 7.69531 21.6205C9.43638 21.6205 11.0368 21.0312 12.3125 20.0335C10.6786 20 9.3058 18.9286 8.83705 17.4554C9.4096 17.5391 9.92522 17.5391 10.5145 17.3884C9.67319 17.2175 8.91699 16.7605 8.37438 16.0953C7.83178 15.43 7.53623 14.5973 7.53795 13.7388V13.692C8.03013 13.9699 8.60938 14.1406 9.2154 14.1641C8.70595 13.8245 8.28814 13.3645 7.99903 12.8249C7.70993 12.2852 7.55845 11.6825 7.55804 11.0703C7.55804 10.3772 7.73884 9.74442 8.06362 9.19531C8.99744 10.3449 10.1627 11.2851 11.4837 11.9548C12.8047 12.6245 14.2518 13.0088 15.731 13.0826C15.2054 10.5547 17.0938 8.50893 19.3638 8.50893C20.4353 8.50893 21.3996 8.95759 22.0792 9.6808C22.9196 9.52344 23.7232 9.2087 24.4397 8.78683C24.1618 9.64732 23.5792 10.3739 22.8058 10.8326C23.5558 10.7522 24.279 10.5446 24.9487 10.2533C24.4431 10.9967 23.8103 11.6562 23.0837 12.1819Z"
            fill="#666666"
          />
        </svg>
        </a>

        <a href="https://github.com/2002-02-20" target="_blank" >
        {/* GITHUB ICON */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
            fill="#666666"
          />
        </svg>
        </a>
        {/* LINKLELIN ICON */}
        <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <g clip-path="url(#clip0_8_50)">
            <path
              d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z"
              fill="#666666"
            />
          </g>
          <defs>
            <clipPath id="clip0_8_50">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
        </a>
        </div>

        </div>
      </header>
    </>
  );
};

export default Navbar;