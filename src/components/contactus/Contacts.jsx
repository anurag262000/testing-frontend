import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import mailIcon from '../../assets/svg/mail.svg';
import phoneIcon from '../../assets/svg/phone2.svg';
import locationIcon from '../../assets/svg/location.svg';

const Contacts = () => {
    const { t } = useTranslation();


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_46bhpnb', 'template_s9bu8rv', form.current, {
                publicKey: 'Eku1xh98yeiL6T0M3',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='flex justify-center items-center h-[90vh] p-4 mb-[100px]'>
            <div className='w-full lg:w-[900px] md:w-[700px] mx-auto bg-white p-6 lg:p-10 flex flex-col lg:flex-row shadow-2xl rounded-xl gap-7'>
                <div className="flex justify-center items-center w-full lg:w-1/2">
                    <div className="w-full max-w-[400px] sm:h-[300px] md:h-[450px] bg-prime text-white p-8 rounded-xl shadow-2xl lg:relative lg:left-[-70px] xl:left-[-70px]">
                        <h2 className="text-3xl font-bold mb-6 lg:mb-14 pt-10">{t('contact_us')}</h2>
                        <div className="flex items-start text-left mb-6 lg:mb-10">
                            <img src={locationIcon} alt="Location" className="w-6 h-6 mr-3" />
                            <p className="flex-1 break-words">{t('location')}</p>
                        </div>
                        <div className="flex items-start text-left mb-6 lg:mb-10">
                            <img src={mailIcon} alt="Email" className="w-6 h-6 mr-3" />
                            <p className="flex-1 break-words">{t('email')}</p>
                        </div>
                        <div className="flex items-start text-left">
                            <img src={phoneIcon} alt="Phone" className="w-6 h-6 mr-3" />
                            <p className="flex-1 break-words">{t('phone')}</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center w-full lg:w-1/2'>
                    <div className='w-full max-w-[400px]'>
                        <h2 className="text-[38px] font-bold mb-4">{t('get_in_touch')}</h2>
                        <p className="mb-6">{t('get_in_touch_description')}</p>
                        <form className='w-full' ref={form} onSubmit={sendEmail}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder={t('your_name')}
                                    name='user_name'
                                    required
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder={t('your_email')}
                                    name='user_email'
                                    required
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="number"
                                    placeholder={t('your_phone')}
                                    name='user_phone'
                                    required
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    placeholder={t('type_your_message')}
                                    name='message'
                                    required
                                    className="w-full p-2 border border-gray-300 rounded h-32 resize-none"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    value="Send"

                                    className="w-full p-2 bg-prime text-white rounded shadow hover:bg-purple-900 transition duration-200"
                                >
                                    {t('send')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
