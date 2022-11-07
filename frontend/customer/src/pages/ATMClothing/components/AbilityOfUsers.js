/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable max-len */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faPalette, faGift } from '@fortawesome/free-solid-svg-icons';
import classes from './AbilityOfUsers.module.scss';

// import {} from '@fortawesome/free-regular-svg-icons'

const AbilityOfUsers = ({ title }) => (
    <div>
        <h3>BẠN CÓ THỂ LÀM GÌ VỚI HỆ THỐNG CỦA CHÚNG TÔI?</h3>
        <div className={classes.container}>
            <div className={classes.ele}>
                <FontAwesomeIcon icon={faCashRegister} className={classes.icon} />
                <h4>{title}</h4>
                <p>
                    Hãy để lại thông tin các quần áo/phụ kiện bạn cần bán, chúng tôi sẽ liên hệ để hỗ trợ bạn sớm nhất!
                </p>
            </div>
            <div className={classes.ele}>
                {/* <FontAwesomeIcon icon={faPalette} className={`${classes.icon} ${classes.rotate}`} /> */}
                <svg
                    className={classes.icon2}
                    // width="184"
                    height="1em"
                    viewBox="0 0 184 155"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_436_100)">
                        <path
                            d="M60.5414 135.223C60.3296 135.137 60.1179 135.051 59.9062 134.965C51.358 131.383 48.6959 121.204 52.1832 112.617L61.5368 89.587C64.0687 83.353 61.0651 76.2411 54.8311 73.7092C54.0313 73.3843 53.2167 73.1632 52.4066 72.9986C49.8065 72.5181 47.0807 72.6168 44.3409 72.6825C40.5118 72.799 36.7157 72.9015 33.3046 71.5162C25.8238 68.4779 21.089 60.6355 23.8214 53.0305C24.1323 52.1976 24.4431 51.3647 24.7871 50.5178C38.2872 17.2777 76.1954 1.26782 109.459 14.7775C142.723 28.2872 158.732 66.1954 145.223 99.459C131.713 132.723 93.805 148.732 60.5414 135.223ZM89.7018 41.8315C93.8656 43.5226 98.5958 41.5248 100.287 37.361C101.978 33.1972 99.9803 28.4669 95.8165 26.7758C91.6526 25.0847 86.9224 27.0825 85.2313 31.2463C83.5402 35.4101 85.5379 40.1404 89.7018 41.8315ZM112.285 51.0035C110.594 55.1674 112.592 59.8976 116.756 61.5887C120.92 63.2798 125.65 61.2821 127.341 57.1182C129.032 52.9544 127.034 48.2242 122.87 46.5331C118.707 44.842 113.976 46.8397 112.285 51.0035ZM119.582 97.8147C123.746 99.5058 128.476 97.5081 130.167 93.3443C131.858 89.1804 129.861 84.4502 125.697 82.7591C121.533 81.068 116.803 83.0657 115.111 87.2296C113.42 91.3934 115.418 96.1236 119.582 97.8147ZM87.8264 111.226C86.1353 115.39 88.1331 120.12 92.2969 121.811C96.4607 123.502 101.191 121.505 102.882 117.341C104.573 113.177 102.575 108.447 98.4116 106.756C94.2478 105.065 89.5175 107.062 87.8264 111.226Z"
                            fill="#3C7D08"
                        />
                        <path
                            d="M100.498 103.173C106.672 102.29 112.236 98.7781 115.696 93.4542L152.266 36.7944C155.115 32.3767 154.392 26.5318 150.547 22.9297C146.702 19.3275 140.845 19.0104 136.638 22.182L83.1068 62.4171C77.679 66.4949 74.4675 72.8609 74.4223 79.6574L100.498 103.173ZM96.0656 108.927L69.8313 85.2758C56.3071 85.7742 45.4741 96.943 45.4741 110.627C45.4741 111.51 45.5193 112.394 45.6098 113.255C46.0169 117.219 43.303 121.501 39.3226 121.501H38.2371C34.2341 121.501 31 124.741 31 128.75C31 132.76 34.2341 136 38.2371 136H70.8038C84.803 136 96.1335 124.65 96.1335 110.627C96.1335 110.06 96.1108 109.494 96.0882 108.927H96.0656Z"
                            fill="#C4A957"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_436_100">
                            <rect width="184" height="155" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <h4>CUSTOM</h4>
                <p>
                    Sản phẩm bạn muốn chỉnh sửa lại, hãy sử dụng ATM Clothing. Tự hào với đội ngũ thiết kế giàu kinh
                    nghiệm sẽ không làm bạn thất vọng
                </p>
            </div>
            <div className={classes.ele}>
                <FontAwesomeIcon icon={faGift} className={`${classes.icon} ${classes.iconGift}`} />
                <h4>TRAO TẶNG</h4>
                <p>
                    Sản phẩm sau khi tặng cho ATM CLOTHING sẽ được khử khuẩn, tái tạo lại thông qua đội ngũ thiết kế đầy
                    kinh nghiệm trước khi mang đi giúp đỡ các đồng bào vùng cao đang gặp nhiều khó khăn.
                </p>
            </div>
        </div>
    </div>
);

export default AbilityOfUsers;
