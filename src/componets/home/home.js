import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";
import text from '../../assets/img/text.png';
import p1 from '../../assets/img/p1.png';
import p2 from '../../assets/img/p2.png';
import p3 from '../../assets/img/p3.png';
import p4 from '../../assets/img/p4.png';
import p5 from '../../assets/img/p5.jpeg';
import p6 from '../../assets/img/p6.png';
import p7 from '../../assets/img/p7.jpeg';
import p8 from '../../assets/img/p8.png';
import p9 from '../../assets/img/p9.png';
import p10 from '../../assets/img/p10.png';
import p11 from '../../assets/img/p11.png';
import p12 from '../../assets/img/p12.png';
import p13 from '../../assets/img/p13.jpeg';
import p14 from '../../assets/img/p14.jpeg';
import p15 from '../../assets/img/p15.png';
import p16 from '../../assets/img/p16.jpeg';
import p17 from '../../assets/img/p17.png';
import b1 from '../../assets/img/b1.jpeg';
import b2 from '../../assets/img/b2.jpeg';
import b3 from '../../assets/img/b3.jpeg';
import b4 from '../../assets/img/b4.jpeg';
import b5 from '../../assets/img/b5.jpeg';
import b6 from '../../assets/img/b6.jpeg';
import b7 from '../../assets/img/b7.jpeg';
import b8 from '../../assets/img/b8.png';
import b9 from '../../assets/img/b9.png';
import b10 from '../../assets/img/b10.png';
import b11 from '../../assets/img/b11.png';
import b12 from '../../assets/img/b12.png';
import b13 from '../../assets/img/b13.png';
import b14 from '../../assets/img/b14.png';
import b15 from '../../assets/img/b15.png';
import b16 from '../../assets/img/b16.jpeg';
import b17 from '../../assets/img/b17.png';
import b18 from '../../assets/img/b18.png';
import b19 from '../../assets/img/b19.png';
import b20 from '../../assets/img/b20.jpeg';
import b21 from '../../assets/img/b21.png';
import b22 from '../../assets/img/b22.png';
import b23 from '../../assets/img/b23.png';
import b24 from '../../assets/img/b24.png';
import b25 from '../../assets/img/b25.png';
import b26 from '../../assets/img/b26.png';
import b27 from '../../assets/img/b27.png';
import b28 from '../../assets/img/b28.png';
import b29 from '../../assets/img/b29.png';
import b30 from '../../assets/img/b30.png';
import b31 from '../../assets/img/b31.png';
import b32 from '../../assets/img/b32.jpeg';
import b33 from '../../assets/img/b33.png';
import b34 from '../../assets/img/b34.png';
import b35 from '../../assets/img/b35.png';
import b36 from '../../assets/img/b36.jpeg';
import b37 from '../../assets/img/b37.png';
import b38 from '../../assets/img/b38.png';
import b39 from '../../assets/img/b39.png';
import globle from '../../assets/img/image123.png';
import environment from '../../assets/img/image124.png';
import ben1 from '../../assets/img/ben.png';
import ben2 from '../../assets/img/ben1.png';
import ben3 from '../../assets/img/iStock-1147041691.jpg';
import ben4 from '../../assets/img/ben3.png';
import phone from '../../assets/img/Illustration.png';
import psg from '../../assets/svg/app-store-google.svg';
import psa from '../../assets/svg/app-store-apple.svg';
import appg from '../../assets/img/images.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import m1 from '../../assets/img/m1.png';
import m2 from '../../assets/img/m2.png';
import m3 from '../../assets/img/m3.png';
import m4 from '../../assets/img/m4.jpeg';
import m5 from '../../assets/img/m5.png';
import m6 from '../../assets/img/m6.jpeg';
import m7 from '../../assets/img/m7.png';
import m8 from '../../assets/img/m8.png';
import m9 from '../../assets/img/m9.png';
import m10 from '../../assets/img/m10.png';
import m11 from '../../assets/img/m11.png';
import m12 from '../../assets/img/m12.jpeg';
import m13 from '../../assets/img/m13.png';
import m14 from '../../assets/img/m14.png';
import m15 from '../../assets/img/m15.png';
import m16 from '../../assets/img/m16.png';
import m17 from '../../assets/img/m17.png';
import m18 from '../../assets/img/m18.png';
import m19 from '../../assets/img/m19.png';
import m20 from '../../assets/img/m20.png';
import m21 from '../../assets/img/m21.png';
import m22 from '../../assets/img/m22.jpeg';
import m23 from '../../assets/img/m23.png';
import m24 from '../../assets/img/m24.png';
import m25 from '../../assets/img/m25.png';
import m26 from '../../assets/img/m26.png';
import m27 from '../../assets/img/m27.png';
import m28 from '../../assets/img/m28.png';
import m30 from '../../assets/img/m30.png';
import m31 from '../../assets/img/m31.png';
import m32 from '../../assets/img/m32.jpeg';
import m33 from '../../assets/img/m33.jpeg';
import m34 from '../../assets/img/m34.png';
import m35 from '../../assets/img/m35.png';
import m36 from '../../assets/img/m36.png';
import m37 from '../../assets/img/m37.png';
import m38 from '../../assets/img/m38.png';
import m39 from '../../assets/img/m39.png';
import m40 from '../../assets/img/m40.png';
import m41 from '../../assets/img/m41.png';
import m42 from '../../assets/img/m42.png';
import m43 from '../../assets/img/m43.png';
import m44 from '../../assets/img/m44.png';
import m45 from '../../assets/img/m45.jpeg';
import m46 from '../../assets/img/m46.png';
import m47 from '../../assets/img/m47.png';
import m48 from '../../assets/img/m48.png';
import m49 from '../../assets/img/m49.png';
import m50 from '../../assets/img/m50.jpeg';
import m51 from '../../assets/img/m51.png';
import m52 from '../../assets/img/m52.png';
import m53 from '../../assets/img/m53.png';
import m54 from '../../assets/img/m54.png';
import m55 from '../../assets/img/m55.png';
import m56 from '../../assets/img/m56.png';
import m57 from '../../assets/img/m57.png';
import m58 from '../../assets/img/m58.png';
import m59 from '../../assets/img/m59.png';
import m60 from '../../assets/img/m60.png';
import m61 from '../../assets/img/m61.png';
import m62 from '../../assets/img/m62.png';
import m63 from '../../assets/img/m63.png';
import m64 from '../../assets/img/m64.png';
import m65 from '../../assets/img/m65.png';
import m66 from '../../assets/img/m66.png';
import m67 from '../../assets/img/m67.jpeg';
import m68 from '../../assets/img/m68.png';
import m70 from '../../assets/img/m70.png';
import m71 from '../../assets/img/m71.jpeg';
import m73 from '../../assets/img/m73.jpeg';
import m74 from '../../assets/img/m74.png';
import m75 from '../../assets/img/m75.png';
import m76 from '../../assets/img/m76.png';
import m77 from '../../assets/img/m77.png';
import m79 from '../../assets/img/m79.png';
import l1 from '../../assets/logo/l1.png';
import l2 from '../../assets/logo/l2.png';
import l3 from '../../assets/logo/l3.png';
import l4 from '../../assets/logo/l4.png';
import l5 from '../../assets/logo/l5.png';
import l6 from '../../assets/logo/l6.jpeg';
import l7 from '../../assets/logo/l7.png';
import l8 from '../../assets/logo/l8.png';
import l9 from '../../assets/logo/l9.png';
import l10 from '../../assets/logo/l10.png';
import l11 from '../../assets/logo/l11.png';
import l12 from '../../assets/logo/l12.png';
import l13 from '../../assets/logo/l13.png';
import l14 from '../../assets/logo/l14.png';
import l15 from '../../assets/logo/l15.png';
import l16 from '../../assets/logo/l16.png';
import l17 from '../../assets/logo/l17.png';
import l18 from '../../assets/logo/l18.png';
import l19 from '../../assets/logo/l19.jpeg';
import l20 from '../../assets/logo/l20.png';
import l21 from '../../assets/logo/l21.png';
import l22 from '../../assets/logo/l22.png';
import l23 from '../../assets/logo/l23.png';
import l24 from '../../assets/logo/l24.png';
import l25 from '../../assets/logo/l25.png';
import l26 from '../../assets/logo/l26.png';
import l27 from '../../assets/logo/l27.png';
import l28 from '../../assets/logo/l28.png';
import l30 from '../../assets/logo/l30.png';
import l31 from '../../assets/logo/l31.png';
import l32 from '../../assets/logo/l32.png';
import l33 from '../../assets/logo/l33.png';
import l34 from '../../assets/logo/l34.png';
import l35 from '../../assets/logo/l35.png';
import l36 from '../../assets/logo/l36.png';
import l37 from '../../assets/logo/l37.png';
import l38 from '../../assets/logo/l38.png';
import l39 from '../../assets/logo/l39.png';
import l40 from '../../assets/logo/l40.png';
import l41 from '../../assets/logo/l41.png';
import l42 from '../../assets/logo/l42.png';
import l43 from '../../assets/logo/l43.png';
import l44 from '../../assets/logo/l44.png';
import l45 from '../../assets/logo/l45.png';
import l46 from '../../assets/logo/l46.png';
import l47 from '../../assets/logo/l47.png';
import l48 from '../../assets/logo/l48.png';
import l49 from '../../assets/logo/l49.png';
import l50 from '../../assets/logo/l50.png';
import l51 from '../../assets/logo/l51.png';
import l52 from '../../assets/logo/l52.png';
import l53 from '../../assets/logo/l53.png';
import l54 from '../../assets/logo/l54.png';
import l55 from '../../assets/logo/l55.png';
import l56 from '../../assets/logo/l56.png';
import l57 from '../../assets/logo/l57.png';
import l58 from '../../assets/logo/l58.png';
import l59 from '../../assets/logo/l59.png';
import l60 from '../../assets/logo/l60.png';
import l61 from '../../assets/logo/l61.png';
import l62 from '../../assets/logo/l62.png';
import l63 from '../../assets/logo/l63.png';
import l64 from '../../assets/logo/l64.png';
import l65 from '../../assets/logo/l65.png';
import l66 from '../../assets/logo/l66.jpeg';
import l67 from '../../assets/logo/l67.jpeg';
import l68 from '../../assets/logo/l68.png';
import l70 from '../../assets/logo/l70.png';
import l71 from '../../assets/logo/l71.png';
import l73 from '../../assets/logo/l73.jpeg';
import l74 from '../../assets/logo/l74.png';
import l75 from '../../assets/logo/l75.png';
import l76 from '../../assets/logo/l76.png';
import l77 from '../../assets/logo/l77.png';
import l79 from '../../assets/logo/l79.png';
import n1 from '../../assets/img/n1.jpeg';
import n2 from '../../assets/img/n2.png';
import n3 from '../../assets/img/n3.png';
import n4 from '../../assets/img/n4.png';
import n5 from '../../assets/img/n5.png';
import n6 from '../../assets/img/n6.png';
import n7 from '../../assets/img/n7.png';
import n8 from '../../assets/img/n8.png';
import n9 from '../../assets/img/n9.png';
import n10 from '../../assets/img/n10.png';
import n11 from '../../assets/img/n11.png';
import n12 from '../../assets/img/n12.png';
import n13 from '../../assets/img/n13.png';
import n14 from '../../assets/img/n14.jpeg';
import n15 from '../../assets/img/n15.png';
import n16 from '../../assets/img/n16.png';
import n17 from '../../assets/img/n17.png';
import n18 from '../../assets/img/n18.png';
import n19 from '../../assets/img/n19.png';
import n20 from '../../assets/img/n20.png';
import n21 from '../../assets/img/n21.png';
import n22 from '../../assets/img/n22.png';
import n23 from '../../assets/img/n23.png';
import n24 from '../../assets/img/n24.png';
import n25 from '../../assets/img/n25.png';
import n26 from '../../assets/img/n26.png';
import n27 from '../../assets/img/n27.png';
import n28 from '../../assets/img/n28.png';
import n29 from '../../assets/img/n29.png';
import n30 from '../../assets/img/n30.png';
import o1 from '../../assets/logo/o1.png';
import o2 from '../../assets/logo/o2.png';
import o3 from '../../assets/logo/o3.png';
import o4 from '../../assets/logo/o4.png';
import o5 from '../../assets/logo/o5.png';
import o6 from '../../assets/logo/o6.png';
import o7 from '../../assets/logo/o7.png';
import o8 from '../../assets/logo/o8.png';
import o9 from '../../assets/logo/o9.png';
import o10 from '../../assets/logo/o10.png';
import o11 from '../../assets/logo/o11.png';
import o12 from '../../assets/logo/o12.png';
import o13 from '../../assets/logo/o13.png';
import o14 from '../../assets/logo/o14.png';
import o15 from '../../assets/logo/o15.png';
import o16 from '../../assets/logo/o17.png';
import o17 from '../../assets/logo/o18.png';
import o18 from '../../assets/logo/o19.png';
import o19 from '../../assets/logo/o20.png';
import o20 from '../../assets/logo/o21.png';
import o21 from '../../assets/logo/o22.png';
import o22 from '../../assets/logo/o23.png';
import o23 from '../../assets/logo/o24.png';
import o24 from '../../assets/logo/o25.png';
import o25 from '../../assets/logo/o26.jpeg';
import o26 from '../../assets/logo/o27.png';
import o27 from '../../assets/logo/o28.png';
import o28 from '../../assets/logo/o29.png';
import o29 from '../../assets/logo/o30.png';
import o30 from '../../assets/logo/o31.png';


function Home() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const data = {
        icn: [
            {
                icon: 'fa fa-truck',
                title: 'Get Great Deals',
                head: 'Save QR 100 or more'
            },
            {
                icon: 'fa fa-headphones',
                title: 'Support Online',
                head: 'Call : +974 3044 4432'
            },
            {
                icon: 'fa fa-tag',
                title: 'Discount',
                head: '20% Off on Selection'
            },
            {
                icon: 'fa fa-money-bill-1',
                title: 'Money Back',
                head: '100% Money Gurantee'
            },
        ],
        Partners: [
            { img: p1, title: 'Qatar Airways Holiday' },
            { img: p2, title: 'Supreme Judiciary Council' },
            { img: p3, title: 'QATAR POST' },
            { img: p4, title: 'Masarf AI Rayan' },
            { img: p5, title: 'Tyrkish Hospital-Rawdat AI Khalil' },
            { img: p6, title: 'Aman Hospitala' },
            { img: p7, title: 'Desert Gate-UAE' },
            { img: p8, title: 'KTS France' },
            { img: p9, title: 'Rayna Tours' },
            { img: p10, title: 'Vippon Holidays' },
            { img: p11, title: 'Golden Globe International' },
            { img: p12, title: 'Beema-Damaan Islamic Insurance Company' },
            { img: p13, title: 'Vodafone Qatar-Mshereib Downtown' },
            { img: p14, title: 'AL Dar For Exchange Works' },
            { img: p15, title: 'Ministry Of Interior' },
            { img: p16, title: 'Ooredoo Qatar-Wast Bay' },
            { img: p17, title: 'Gulf Exchange' },
        ],
        Brands: [
            { img: b1, title: 'Ameliorate-AI Gharrafa' },
            { img: b2, title: 'Arclinea-Msheireb Downtown' },
            { img: b3, title: 'Maxalto-Msheireb Downtown' },
            { img: b4, title: 'B&B ITALIYA-Msheireb Downtown' },
            { img: b5, title: 'Henge-Msheireb Downtown' },
            { img: b6, title: 'Tecno-Msheireb Downtown' },
            { img: b7, title: 'FLOS-Msheireb Downtown' },
            { img: b8, title: 'Pronovias-Lagoona Mall' },
            { img: b9, title: 'Parfois-Mirqab Mall' },
            { img: b10, title: 'MANGO-Mirqab Mall' },
            { img: b11, title: 'Lindex-Mirqab Mall' },
            { img: b12, title: 'ETAM-Doha Festival City' },
            { img: b13, title: 'Women`secret-Mirqab Mall' },
            { img: b14, title: 'Adolfo Dominguez-Lagoona Mall' },
            { img: b15, title: 'Illamasqua-AI Gharrafa' },
            { img: b16, title: 'Fresh Line-AI Gharrafa' },
            { img: b17, title: 'Perricone MD-AI Gharrafa' },
            { img: b18, title: 'Grow Gorgeous-AI Gharrafa' },
            { img: b19, title: 'Eyeko-AI Gharrafa' },
            { img: b20, title: 'Ameliorate-AI Gharrafa' },
            { img: b21, title: 'Mama-Mio-AI Gharrafa' },
            { img: b22, title: 'Mio-AI Gharrafa' },
            { img: b23, title: 'RG Cosmetics-AI Gharrafa' },
            { img: b24, title: 'Make Up Atelier-AI Gharrafa' },
            { img: b25, title: 'Christophe Robin -AI Gharrafa' },
            { img: b26, title: 'Ceriotti-AI Gharrafa' },
            { img: b27, title: 'Cinq Mondes-AI Gharrafa' },
            { img: b28, title: 'Farmavita-AI Gharrafa' },
            { img: b29, title: 'Naliberry-AI Gharrafa' },
            { img: b30, title: 'Patrice Mulato-AI Gharrafa' },
            { img: b31, title: 'Peggy Sage-AI Gharrafa' },
            { img: b32, title: 'Cirepil-AI Gharrafa' },
            { img: b33, title: 'Qiriness-AI Gharrafa' },
            { img: b34, title: 'Red Cherry-AI Gharrafa' },
            { img: b35, title: 'Termix-AI Gharrafa' },
            { img: b36, title: 'Beox-AI Gharrafa' },
            { img: b37, title: 'Valentino-AI Gharrafa' },
            { img: b38, title: 'Salvatore Ferragamo-Villaggio Mall' },
            { img: b39, title: 'Roberto Cavalli-Villaggio Mall' },
        ],
        Lhotels: [
            { img1: m1, img2: l1, title: 'DoubleTree-Old Town' },
            { img1: m2, img2: l2, title: 'The Curve Hotel Doha' },
            { img1: m3, img2: l3, title: 'AI Mirqab Boutique Hot...' },
            { img1: m4, img2: l4, title: 'Raffles Doha' },
            { img1: m5, img2: l5, title: 'Mina Hotel and Reside...' },
            { img1: m6, img2: l6, title: 'Staybridge Suites Doha' },
            { img1: m7, img2: l7, title: 'AI Mansour Suites Hotel' },
            { img1: m8, img2: l8, title: 'Soup Woqif Boutique H...' },
            { img1: m9, img2: l9, title: 'Crowne Plaza-The Bu...' },
            { img1: m10, img2: l10, title: 'KATARA HILLS' },
            { img1: m11, img2: l11, title: 'DoubleTree-AI Sadd' },
            { img1: m12, img2: l12, title: 'Fairmont Doha' },
            { img1: m13, img2: l13, title: 'DoubleTree by Hilton-...' },
            { img1: m14, img2: l14, title: 'Four Points by Sherato...' },
            { img1: m15, img2: l15, title: 'Water Hotel & Ap...' },
            { img1: m16, img2: l16, title: 'The RITZ-CARLTON DO..' },
            { img1: m17, img2: l17, title: 'Element West Bay Doha' },
            { img1: m18, img2: l18, title: 'Century Marina Hotel L...' },
            { img1: m19, img2: l19, title: 'AI Jasra Boutique Hotel' },
            { img1: m20, img2: l20, title: 'Grand Hyatt Doha' },
            { img1: m21, img2: l21, title: 'AI Manzil Residence &...' },
            { img1: m22, img2: l22, title: 'Delta Hotels by Marriot...' },
            { img1: m23, img2: l23, title: 'AI Najada Apartments' },
            { img1: m24, img2: l24, title: 'VIP Hotel Doha' },
            { img1: m25, img2: l25, title: 'Saray Corniche Hotel' },
            { img1: m26, img2: l26, title: 'Musheireb Boutique H...' },
            { img1: m27, img2: l27, title: 'Marriott Marquis City C...' },
            { img1: m28, img2: l28, title: 'Jouri. A Murwab Hotel' },
            { img1: m30, img2: l30, title: 'Element City Center D...' },
            { img1: m31, img2: l31, title: 'AI Rayyan Hotel Doha' },
            { img1: m32, img2: l32, title: 'Millennium Hotel Doha' },
            { img1: m33, img2: l33, title: 'W Doha Hotel & Reside...' },
            { img1: m34, img2: l34, title: 'International Doha ...' },
            { img1: m35, img2: l35, title: 'Waldorf Astoria Lusail' },
            { img1: m36, img2: l36, title: 'Fraser Suites Doha' },
            { img1: m37, img2: l37, title: 'The Westin Doha Hotel...' },
            { img1: m38, img2: l38, title: 'Retal Bay Walk Residen...' },
            { img1: m39, img2: l39, title: 'GOLDEN TULIP DOHA' },
            { img1: m40, img2: l40, title: 'Warwick Doha' },
            { img1: m41, img2: l41, title: 'AI Messila Resort & Sp...' },
            { img1: m42, img2: l42, title: 'Najb Boutoque Hotel' },
            { img1: m43, img2: l43, title: 'AI Samriya-Doha-Au...' },
            { img1: m44, img2: l44, title: 'Hampton by Hilton Do...' },
            { img1: m45, img2: l45, title: 'Retaj Sawa Resort & S...' },
            { img1: m46, img2: l46, title: 'Hitton Solwa Beach Re...' },
            { img1: m47, img2: l47, title: 'Sheraton Grand Doha...' },
            { img1: m48, img2: l48, title: 'Embassy Suites' },
            { img1: m49, img2: l49, title: 'Wyndham Grand Rege...' },
            { img1: m50, img2: l50, title: 'Retaj inn AI Wakran' },
            { img1: m51, img2: l51, title: 'AI Aziziyah Boutique H...' },
            { img1: m52, img2: l52, title: 'Aleph Doha Residences' },
            { img1: m53, img2: l53, title: 'Best Western Plus Doha' },
            { img1: m54, img2: l54, title: 'Bismillah Boutique Hotel' },
            { img1: m55, img2: l55, title: 'Maysan Doha' },
            { img1: m56, img2: l56, title: 'Retaj AI Rayyan Hotel' },
            { img1: m57, img2: l57, title: 'VOCO Doha West Bay S...' },
            { img1: m58, img2: l58, title: 'Spphire Plaza Hotal' },
            { img1: m59, img2: l59, title: 'Cielo Hotel Lusail' },
            { img1: m60, img2: l60, title: 'Four Seasons Doha' },
            { img1: m61, img2: l61, title: 'AI Mansour Plaza Hotel' },
            { img1: m62, img2: l62, title: 'Holiday Inn Doha-The' },
            { img1: m63, img2: l63, title: 'Concorde Hotel Doha' },
            { img1: m64, img2: l64, title: 'Century Hotel Doha' },
            { img1: m65, img2: l65, title: 'Banyan Tree Doha' },
            { img1: m66, img2: l66, title: 'AI Biddo Boutique Hotel' },
            { img1: m67, img2: l67, title: 'Arumaila Boutiqye Hotel' },
            { img1: m68, img2: l68, title: 'Marsa Malaz Kempinski' },
            { img1: m70, img2: l70, title: 'AI Najada Hotel by Tivali' },
            { img1: m71, img2: l71, title: 'Mandarin Oriental Doha' },
            { img1: m73, img2: l73, title: 'RIXOS GULF HOTEL DOHA' },
            { img1: m74, img2: l74, title: 'Lo Cigale Hotel' },
            { img1: m75, img2: l75, title: 'Kingsgate Hotel Doha' },
            { img1: m76, img2: l76, title: 'The Ned Doha' },
            { img1: m77, img2: l77, title: 'Rodissam Biu Hotel Doha' },
            { img1: m79, img2: l79, title: 'The Royal Riviera' },
        ],
        Ihotels: [
            { img1: n1, img2: o1, title: 'Ai Marwa Rayhaan By...' },
            { img1: n2, img2: o2, title: 'Burj AI Arab' },
            { img1: n3, img2: o3, title: 'Jumeirah AI Naseem' },
            { img1: n4, img2: o4, title: 'Anjum Hotel Makkh' },
            { img1: n5, img2: o5, title: 'Khalidiya Palace Rayha' },
            { img1: n6, img2: o6, title: 'Crowne Plaza Jordon-...' },
            { img1: n7, img2: o7, title: 'Dar AI Eiman Royal Hot...' },
            { img1: n8, img2: o8, title: 'Hilton Makkah Convent...' },
            { img1: n9, img2: o9, title: 'Bvlgari Hotel Paris' },
            { img1: n10, img2: o10, title: 'Hilton Suites Makkah' },
            { img1: n11, img2: o11, title: 'Jabal Omar Conrad Mo...' },
            { img1: n12, img2: o12, title: 'Jabal Omar DoubleTre...' },
            { img1: n13, img2: o13, title: 'Four Seasons Hotel De...' },
            { img1: n14, img2: o14, title: 'Makkah Clock Royal To...' },
            { img1: n15, img2: o15, title: 'Movenpick Hotel & Resi...' },
            { img1: n16, img2: o16, title: 'Pullman Zamzam Makk...' },
            { img1: n17, img2: o17, title: 'Raffles Makkah Palace' },
            { img1: n18, img2: o18, title: 'Shaza Makkah' },
            { img1: n19, img2: o19, title: 'Swissatel Makkah' },
            { img1: n20, img2: o20, title: 'Divan Suites Batumi-...' },
            { img1: n21, img2: o21, title: 'The Peninsula Shangh...' },
            { img1: n22, img2: o22, title: 'The St. Regis Ammon' },
            { img1: n23, img2: o23, title: 'Royal Atlantis Hotel' },
            { img1: n24, img2: o24, title: 'Royal Tulip - Almaty' },
            { img1: n25, img2: o25, title: 'Park Hyatt Tokyo - Jap...' },
            { img1: n26, img2: o26, title: 'Patina - Maldives' },
            { img1: n27, img2: o27, title: 'Velaa Private lsland' },
            { img1: n28, img2: o28, title: 'Malmaison Manchester' },
            { img1: n29, img2: o29, title: 'Hotel de Paris Monte-C...' },
            { img1: n30, img2: o30, title: 'Hilton Dead Sea Resort...' },
        ],
        sub: [
            {
                icon: 'fa fa-download', title: 'App Download',
                p: 'The employee and customer downloads the Golalita application by entering the email and password',
            }, {
                icon: 'fa fa-bag-shopping', title: 'Shop points',
                p: 'Through the application, the employee and customer knows all the offers and discounts offered by the stores shared with us, as well as their locations',
            }, {
                icon: 'fa fa-credit-card', title: 'Payment Method',
                p: 'The employee and customer purchases from the stores participating in the application, whether discounts and points or only discounts, and he can pay cash or through a bank card.',
            }, {
                icon: 'fa fa-bar-chart', title: 'Points collection',
                p: 'The employee and customer gets one (1) point for every 6 or 8 riyals of purchases in the store',
            }, {
                icon: 'fa-brands fa-etsy', title: 'Exclusive Benefits',
                p: 'The employee can add his family members and customer receive the same benefits You can also exchange points for future purchases in some stores, or use them through our online store network.',
            }, {
                icon: 'fa fa-eye', title: 'Get great deals across Qatar',
                p: 'Enjoy shopping with Golalita the most popular apps in Qatar, accepted at over 900 outlets in the country with good discounts and offers',
            },
        ],
    };
    return (
        <div className='mt-20'>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <div className="bg-bgImage1 h-100 w-screen bg-no-repeat bg-cover img-fluid">
                            <div>
                                <Container className='p-12'>
                                    <Row className='px-5'>
                                        <Col lg={12} data-aos="fade-up" data-aos-duration="1000">
                                            <div>
                                                <h1 className='tracking-wide fw-bold text-white lg:text-6xl md:text-5xl sm:text-5xl text-4xl'>Sale Starts Today</h1>
                                                <img src={text} alt="text" className='py-5' />
                                                <center>
                                                    <a href={'Merchants'}><h1 className="text-white w-fit px-4 py-2 bg-teal-500 rounded-5">Shop Now</h1></a>
                                                </center>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <div className="bg-bgImage2 h-100 w-screen bg-no-repeat bg-cover img-fluid">
                            <div>
                                <Container className='p-12'>
                                    <Row className='px-5'>
                                        <Col lg={12}>
                                            <div>
                                                <h1 className='tracking-wide fw-bold text-white lg:text-6xl md:text-5xl sm:text-5xl text-4xl'>Sale Starts Today</h1>
                                                <img src={text} alt="text" className='py-5' />
                                                <center>
                                                    <a href={'Merchants'}><h1 className="text-white w-fit px-4 py-2 bg-teal-500 rounded-5">Shop Now</h1></a>
                                                </center>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-gray-100'>
                <Container className='px-0'>
                    <Row>
                        {data.icn.map((item, index) => (
                            <Col lg={3} md={6} sm={12} key={item.item + index}>
                                <div className="py-4 d-flex">
                                    <i className={item.icon + ' text-3xl p-3 me-3 text-white bg-teal-500 rounded-full'}></i>
                                    <div className='pt-3'>
                                        <h1 className='fw-bold'>{item.title}</h1>
                                        <h1 className='text-teal-500 pt-1'>{item.head}</h1>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            <h1 className='fw-bold text-center py-4 text-2xl font-mono'>Our Premium Partners</h1>
            <div className='px-5'>
                <Slider {...settings}>
                    {data.Partners.map((item, index) => (
                        <div key={item.title + index}>
                            <a href={'Merchants'}>
                                <img src={item.img} alt="img" className='img-fluid w-full px-1 h-40' />
                                <h1 className='text-teal-500 text-center text-sm pt-1'>{item.title}</h1>
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>

            <h1 className='fw-bold text-center py-4 text-2xl font-mono'>Top Brands</h1>
            <div className='px-5'>
                <Slider {...settings}>
                    {data.Brands.map((item, index) => (
                        <div key={item.title + index}>
                            <a href={'Merchants'}>
                                <img src={item.img} alt="img" className='img-fluid w-full px-1 h-40' />
                                <h1 className='text-teal-500 text-center text-sm pt-1'>{item.title}</h1>
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>

            <h1 className='fw-bold text-center py-4 text-2xl font-mono'>Local Premium Hotels</h1>
            <div className='px-5'>
                <Slider {...setting}>
                    {data.Lhotels.map((item, index) => (
                        <div key={item.title + index}>
                            <div className="bg-white rounded-xl shadow-md m-1">
                            <a href={'Merchants'}><img src={item.img1} className="img-fluid px-1 rounded-t-xl h-52 w-100" /></a>
                                <img src={item.img2} className="img-fluid px-1 rounded-full h-14 w-16 position-absolute top-44 ms-2" />
                                <i className="fa-solid fa-bell position-absolute top-48 ms-64 bg-white p-1 px-2 rounded-full text-lg"></i>
                                <div className="d-flex py-4 justify-between px-3">
                                    <h1 className="card-text text-sm py-2">{item.title}</h1>
                                    <div className='py-2'>
                                        <i className="fa-solid fa-star pe-1"></i>
                                        <i className="fa-solid fa-star pe-1"></i>
                                        <i className="fa-solid fa-star pe-1"></i>
                                        <i className="fa-solid fa-star pe-1"></i>
                                        <i className="fa-solid fa-star pe-1"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <h1 className='fw-bold text-center py-4 text-2xl font-mono'>International Premium Hotels</h1>
            <div className='px-5'>
                <Slider {...setting}>
                    {data.Ihotels.map((item, index) => (
                        <div key={item.title + index}>
                            <div className="bg-white rounded-xl shadow-md m-1">
                            <a href={'Merchants'}><img src={item.img1} className="img-fluid px-1 rounded-t-xl h-52 w-100" /></a>
                                <img src={item.img2} className="img-fluid px-1 rounded-full h-14 w-16 position-absolute top-44 ms-2" />
                                <i className="fa-solid fa-bell position-absolute top-48 ms-64 bg-white p-1 px-2 rounded-full text-lg"></i>
                                <div className="d-flex py-4 justify-between px-3">
                                    <h1 className="card-text text-sm py-2">{item.title}</h1>
                                    <div className='py-2'>
                                        <i className="fa-solid fa-star pe-1"></i>
                                        <i className="fa-solid fa-star pe-1"></i>
                                        <i className="fa-solid fa-star pe-1"></i>
                                        <i className="fa-solid fa-star pe-1"></i>
                                        <i className="fa-solid fa-star pe-1"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <Container className='py-5' >
                <Row>
                    <Col lg={6} md={12} className='py-5'>
                        <h1 className='pb-3 font-mono text-2xl'>Golalita Rewards App B2B Qatar & Global</h1>
                        <p className='text-sm pe-3 text-gray-500 '>Empower your employees to unlock their full potential. Employee offers and discounts access to 2500+ offers and discounts. Features a mobile app available on iOS & Android & Gallery store. Supports accounts for 8 family members. Employee management system with the ability to add and remove employees featuring a smart electronic registration. Manage exclusive offers and discounts along with detailed reports and statistics. Partnerships and offers recommendation services. We are working B2B with organizations, ministries, & banks, holding only for employees.</p>
                        <p className='text-sm pe-3 text-gray-500 py-3'>We Foster Loyalty and Happiness Among Your Employees.</p>
                        <p className='text-sm pe-3 text-gray-500 '>Golalita Rewards App delights and supports employees through programs specifically designed for companies and organizations, aiming to enhance employee loyalty, engagement, and happiness.</p>
                    </Col>
                    <Col lg={6} md={12}>
                        <img src={globle} alt="img" className='img-fluid w-full' />
                    </Col>
                </Row>
            </Container >

            <Row className='g-0 pb-4 px-5'>
                <Col lg={3} md={6} sm={12} className='p-2'><div className='shadow-md rounded-3'><img src={ben1} alt="img" className='img-fluid w-full' /></div></Col>
                <Col lg={3} md={6} sm={12} className='p-2'><div className='shadow-md rounded-3'><img src={ben2} alt="img" className='img-fluid w-full' /></div></Col>
                <Col lg={3} md={6} sm={12} className='p-2'><div className='shadow-md rounded-3'><img src={ben3} alt="img" className='img-fluid w-full' /></div></Col>
                <Col lg={3} md={6} sm={12} className='p-2'><div className='shadow-md rounded-3'><img src={ben4} alt="img" className='img-fluid w-full' /></div></Col>
            </Row>

            <Container className='py-5'>
                <Row>
                    <Col lg={6} md={12} className='pb-4'>
                        <h1 className='font-mono text-2xl fw-bold'>Explore our Solutions</h1>
                        <p className='text-sm pe-3 text-gray-500 py-3'>With our specialized programs, we ensure your employees feel valued and appreciated, fostering a positive and fulfilling work environment</p>
                        <h1 className='font-mono text-2xl fw-bold'>Key features and benefits</h1>
                        <ul className='text-sm ps-5 text-gray-500 py-3'>
                            <li className='list-disc'>Online shopping & online booking with special code for all international hotels.</li>
                            <li className='list-disc'>Gift cards for local, GCC, Europe, UK, & USA with big brands merchants.</li>
                            <li className='list-disc'>Exclusive discounts & offers for entertainment, gyms, parks, restaurants, fashion, beauty, automotive, health, tourism, travels, and packages benefits for employees & families.</li>
                            <li className='list-disc'>Employees can add the Golalita cards to Apple Wallet & Android Wallet.</li>
                            <li className='list-disc'>Dashboard for all your shopping & offers.</li>
                            <li className='list-disc'>Loyalty points program with an integrated system applicable to all commercial establishments regardless of their activities.</li>
                            <li className='list-disc'>Product integration with a web view on the mobile application featuring a highly responsive interface and a dynamic link pattern for users.</li>
                        </ul>
                    </Col>
                    <Col lg={6} md={12}>
                        <img src={environment} alt="img" className='img-fluid w-full' />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col lg={6} md={12} className='py-3'>
                        <img src={phone} alt="img" className='img-fluid w-full' />
                    </Col>
                    <Col lg={6} md={12} className='pt-28'>
                        <h1 className='py-5 text-2xl fw-bold'>Download the Golalita app now for IOS & Android</h1>
                        <div className='d-flex'>
                            <a href='https://play.google.com/store/apps/details?id=com.golalitarewards&hl=en&gl=US'><img src={psg} alt="img" className='w-52' /></a>
                            <a href='https://apps.apple.com/pk/app/golalita-rewards-and-discount/id1589276214?platform=iphone'><img src={psa} alt="img" className='w-52 px-2' /></a>
                            <a href='https://urldra.cloud.huawei.com/q9zefB5Hxe'><img src={appg} alt="img" className='w-52' /></a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div>
                <h1 className='py-3 text-2xl fw-bold text-uppercase text-center'>POPULAR CATEGORY</h1>
                <Row className='g-0 px-3 pb-5'>
                    <Col lg={6} md={6} sm={12} className='py-2'>
                        <div className='bg-white mx-2'>
                            <div className="bg-category1 h-100 w-screen bg-no-repeat bg-cover img-fluid">
                                <a href={'Merchants'}>
                                    <div className='pt-80 pb-3 ps-4' style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))' }}>
                                        <h1 className='text-white pb-2 fw-bold fs-5'>Clothing & Shoes</h1>
                                        <h1 className='text-white hover:underline underline-offset-4 text-sm'>Shop Products</h1>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className='py-2'>
                        <div className='bg-white mx-2'>
                            <div className="bg-category2 h-100 w-screen bg-no-repeat bg-cover img-fluid">
                                <a href={'Merchants'}>
                                    <div className='pt-80 pb-3 ps-4' style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))' }}>
                                        <h1 className='text-white pb-2 fw-bold fs-5'>Auto</h1>
                                        <h1 className='text-white hover:underline underline-offset-4 text-sm'>Shop Products</h1>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className='py-2'>
                        <div className='bg-white mx-2'>
                            <div className="bg-category3 h-100 w-screen bg-no-repeat bg-cover img-fluid">
                                <a href={'Merchants'}>
                                    <div className='pt-80 pb-3 ps-4' style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))' }}>
                                        <h1 className='text-white pb-2 fw-bold fs-5'>Restaurants</h1>
                                        <h1 className='text-white hover:underline underline-offset-4 text-sm'>Shop Products</h1>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className='py-2'>
                        <div className='bg-white mx-2'>
                            <div className="bg-category4 h-100 w-screen bg-no-repeat bg-cover img-fluid">
                                <a href={'Merchants'}>
                                    <div className='pt-80 pb-3 ps-4' style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))' }}>
                                        <h1 className='text-white pb-2 fw-bold fs-5'>Health & Beauty</h1>
                                        <h1 className='text-white hover:underline underline-offset-4 text-sm'>Shop Products</h1>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className='py-2'>
                        <div className='bg-white mx-2'>
                            <div className="bg-category5 h-100 w-screen bg-no-repeat bg-cover img-fluid">
                                <a href={'Merchants'}>
                                    <div className='pt-80 pb-3 ps-4' style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))' }}>
                                        <h1 className='text-white pb-2 fw-bold fs-5'>Appliances</h1>
                                        <h1 className='text-white hover:underline underline-offset-4 text-sm'>Shop Products</h1>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='py-2'>
                        <div className='bg-white mx-2'>
                            <div className="bg-category6 h-100 w-screen bg-no-repeat bg-cover img-fluid">
                                <a href={'Merchants'}>
                                    <div className='pt-80 pb-3 ps-4' style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))' }}>
                                        <h1 className='text-white pb-2 fw-bold fs-5'>Electronics</h1>
                                        <h1 className='text-white hover:underline underline-offset-4 text-sm'>Shop Products</h1>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className='py-2'>
                        <div className='bg-white mx-2'>
                            <div className="bg-category7 h-100 w-screen bg-no-repeat bg-cover img-fluid">
                                <a href={'Merchants'}>
                                    <div className='pt-80 pb-3 ps-4' style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))' }}>
                                        <h1 className='text-white pb-2 fw-bold fs-5'>Travel</h1>
                                        <h1 className='text-white hover:underline underline-offset-4 text-sm'>Shop Products</h1>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className='py-2'>
                        <div className='bg-white mx-2'>
                            <div className="bg-category8 h-100 w-screen bg-no-repeat bg-cover img-fluid">
                                <a href={'Merchants'}>
                                    <div className='pt-80 pb-3 ps-4' style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))' }}>
                                        <h1 className='text-white pb-2 fw-bold fs-5'>Sports</h1>
                                        <h1 className='text-white hover:underline underline-offset-4 text-sm'>Shop Products</h1>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className='py-2'>
                        <div className='bg-white mx-2'>
                            <div className="bg-category9 h-100 w-screen bg-no-repeat bg-cover img-fluid">
                                <a href={'Merchants'}>
                                    <div className='pt-80 pb-3 ps-4' style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))' }}>
                                        <h1 className='text-white pb-2 fw-bold fs-5'>Jewelry & Accessories</h1>
                                        <h1 className='text-white hover:underline underline-offset-4 text-sm'>Shop Products</h1>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className='py-2'>
                        <div className='bg-white mx-2'>
                            <div className="bg-category10 h-100 w-screen bg-no-repeat bg-cover img-fluid">
                                <a href={'Merchants'}>
                                    <div className='pt-80 pb-3 ps-4' style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))' }}>
                                        <h1 className='text-white pb-2 fw-bold fs-5'>QBIS</h1>
                                        <h1 className='text-white hover:underline underline-offset-4 text-sm'>Shop Products</h1>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <Container>
                <div className='text-center font-semibold text-2xl py-4'>
                    <h1 className='pb-3'>How does the employee retrieve the value of the annual <br />subscription from the discounts Annual subscription <br />benefits</h1>
                    <div className="w-16 h-1 bg-teal-500 mx-auto"></div>
                </div>
                <Row>
                    {data.sub.map((item, index) => (
                        <Col lg={4} md={6} sm={12} key={item.item + index}>
                            <div className="py-4 d-flex">
                                <div className='pe-4 pt-3'>
                                    <i className={item.icon + ' text-3xl p-3 text-teal-500 border-1 rounded-3 border-teal-500'}></i>
                                </div>
                                <div className='pt-3'>
                                    <h1 className='text-sm'>{item.title}</h1>
                                    <h1 className='text-gray-500 pt-2 text-sm'>{item.p}</h1>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div >
    );
};
export default Home;