import Zapatos1 from "../components/Zapatos";
import { Container, Row, Col } from "react-bootstrap";

const TablaProductos = () => {
  const Zapatos = [
    {
        id : "D&G001",
        marca : "Dolce & Gabbana",
        title: "Botas de cuero",
        description: "Botas de cuero para hombres con altura hasta los tobillos",
        price: 6930000,
        category: "Elegante",
        url:"https://lh3.googleusercontent.com/v7vLkoDSRxHQ71ie9qZUPDZsSsOZfHRu6ccPRR8DHqOXnGVyDFYf2-adudVbfEYrPy3tiH6j0ogGj5ydGYhN9n3AYnSNfE_cPAOzs7xUYj9_5wtUBKJ03xPrugI-QooPrdCb_Qc2BsQ9rsQ-WhHoCLQhM_1X-F6ugiJJu3e6ugFZGmnoyTfTK4o83kxH3l63P1KYcK7c48oyopIoYqVJrMxRrKoAp64tEpkgECBShekOFFRRjCxekuDWIrDdWgH1U9fAMCtzfgfpdXqi1f6rqsMcejG9mvUVXXXS7yCM4YsKbvmFqMLetP1uxHi4Bh3ONrsYvv3J6crzTQZ_rdbsYml_K1ItYR_F3Ds-j6tbVUIbPpR7UR6KATdSHIpgDbrTw_YCwforpm_O5pRNO8OIAoPs9Dvd4EeEVrjaoYorNkY5Y5uwy-g1N-TN2P3H9CdVD1SjH5xU8KVYKlOPhCnc47tlq5gZnocdMAbaocVhHjsD7hQfcaRfdSHILQ59MFP6RofcxIFhC3gJNrJgl7b2sMMdtddtOad4UrKLjteoKtjTK3KzmVoX7AMIB-jqLXCI1Le3Sdhgr_NbjXQt-5eCLDkVPfBsufh4apP7GneoF_ao0d0epwPMyBih1DCzAYnZLvCIi3SmwbarBgCVTaYJFy4VZroXBZt044-VGLDikaERKMsN1e2qRaYEEdE0Q-MEGSy_fVRZTJNIra7AH3HSd1A=w492-h625-no?authuser=0", 
    },
    {
        id: "D&G002",
        marca : "Dolce & Gabbana",
        title: "Zapatos de cuero",
        description: "Zapatos elegantes y comodos de la linea Napoli de la marca Dolce & Gabbana",
        price: 5513515,
        category: "Clasico",
        url: "https://lh3.googleusercontent.com/tCThuaPxrIUbueldpH-OtgZh6USWMirNB9ZmIS06kExqJztPAhBGtnYCCvbhwVea3VF04jVkCDwPnIG-XI0LFbs2a2DacbhGepHaneQU2tGs_i7H14Tb2c1HyoO3uyueoNr7sbKqPrKcCEAqDjni_9sqHAuan3_FF5sAY59uhjOBg9GRrD84I3HFo_urfFHYqJU_j1dONlX5u9y3acSTyNZT30hPWYOGBEDcnDDmsCxgVfFvvWYVxnjR5NqdV1kwiTNpArZ-eTKvHYDlA-M6VDqyhvooLLOTwiSrGuym_-yv_6SfruGP_Ln1dmGkWhQHfa_TtXw0qzbwUTixO0ExufjQGqi4iw4WyQlyiNE0WVNKXqDVAI2gZeFhRtoTFvXP1wmsDSM6MyP7PYeFceuq-jp81rFxjg-im1Vs18T_wJSh6U6ENV9K3XZI_pJwrd1isJ8KpScOM8YH2VYHSaRVvzv-VYIzawWel5bCYjtw68ejb9h8J2oXNwYaFq5G7bxOQmvvybzungh921F6MKe_j32y_7khXgPYBWFKiHmi7kfAPwi1Btdztqz7Y7tLuDljQOAuhgVzCv6PljWPKgHqnAGxgH8gKa8FW1zgYs6hvoxZ1IaszTXO8olc0IXAELtDAeqQwGevcBITC0WxqBqQhLpjqqWbeJ2E6gknqROJa2eSJ10X2Y_SGY-25e9fYwMgnBjEa_7tYBvgYl6U5heevI0=w492-h625-no?authuser=0",
    },
    {
        id: "D&G003",
        marca : "Dolce & Gabbana",
        title: "Botines Chelsea",
        description: "Botines Chelsea Giotto en piel  de becerro pintada a mano",
        price: 6385217,
        category: "Casual",
        url: "https://lh3.googleusercontent.com/tvAgQcmAPMc_5hJEK9uIWstIP4g-8W8Ovkurxh9iO9yoLScd5Ip7FVOWCPCuNN-gJeZg6BFW2xMRayE5Loys73was5Y4zDGg116sRV0UORxlzntNS22v3yfI1ustiF0nZ9KqfJ7erTyK65EI3_1JmbbYP1E5TqOOkAzOsokbQFI4InUtv8PtoXU8MCnXq5aKfWLV01M_AKK5q4xTPA8RHUZJKiSiZBL4G57go1SJFoN_AK9fhdtftRH-gYjeSxZk33N93gaPqkghdmNCG-ksd4wNoH9iUYrZif-x-9OLH1aP7UK5Btilub5UaeOtiHPrNhB2MBbdVILOLZAP53EshWSRYXf4wXm8Agtkkw1sTJgo6ttZ1Kkbz2vjvUTx6lU7tZHQwZ_Bfczoi54leuLEEQdBTUHpTyX7DWA6q2omK00XeckYER15-LZPSh0v6HxSuuOila0qTjsuVprZjT5haNMSARwyusCOuqfxFyoafyMEUq11kp7_KmoHNk0gAQS2N7O5ecFHU-kuRBXJakz4Zf5P84fk84o7A3-OK4nLKMp7_0uHC4c7gFZn5wD7x5w0-QVi3Scbcbye_x1BysjeDgN88VE9tlWgSHNxf0bkrWn9MIwHncUmwBt-LQxccqNXZIKOeLAwSZTzHJMd8x1SvyVnrgBlfhGWMHRj01Dwh0G0HI9V7B66sVmZKoUNovUtzrzFWjKrxD--QskTumJtr8o=w490-h625-no?authuser=0",
    },
    {
        id: "D&G004",
        marca : "Dolce & Gabbana",
        title: "Zapatos altos estilo animal print",
        description: "El icónico estampado de leopardo viene en tonos brillantes. Femeninos y sensuales",
        price: 3617600,
        category: "Elegante",
        url: "https://lh3.googleusercontent.com/wSxaVVdO2H1GmWCZKYZZP9AX5fWiPYaZgTiAiJcVcKZWc30PoGIwzfngtJbxrvLBkbCSlmjhVURoPgov_scUywXePihgB8dgnLOVtm7hFt5-Kg3Uoi8jz6L3CwQ0JktZr2Ns3MB7tS6-gbSd-CeTdiRaUvHe2Ba9BlsOy6A8AF9O30gBO7pLQidDftHVU-Htpf_uV8YgAl1c5cq125jmLADTo08sA1sh2jXG31ovlxKbTyhBiHHUjHczK4r-K3IcrjJUKw-dP42J7ZhoMKp7f4FyAqt6SC9TCE2yEubH4wSr6HupPzyM_mpdkW1Icrfvr3EGY570pLYuzSOASOZq3IhwFva7RaB2j-iklBj68aguXSnQOPVMZbxenm3oQqVdOMvACrcEFVG_BBNm-EejsibIKHBBNEQgIjXXLqRx7BkRSUlUd2t9G5RHhZmpFEpjt2NFFYK0NcZ20Qu1vtDK1QMK2j_Advhxn5ubPR82xMprSuZis_TKbWj1K0EG8wuMrGUm-AGsRIIYY8EhpkkQ5FtLMYfsO43bOeHT-MmA8ADmbXD5mib7yIcmea_Wq5NmLmw8gLxj1xj8fBxccpXP-r8Pb37Okl0nL8zfvihJEPKUOnIMs7CkaTNmrTeZVxumnmIH7eiXwtTMTH18wV0cxaJTJfBTQtZ6CZqGG_uicpdkze7LfccL5sA5vxsYfSIUScrx1J5BbeZPqsYrxWoTFf8=w490-h625-no?authuser=0",
    },
    {
        id: "D&G005",
        marca : "Dolce & Gabbana",
        title: "Botines de cuero",
        description: "Botines de nueva generación en piel de becerro engomado de la marca Dolce & Gabbana",
        price: 5513500,
        category: "Juvenil",
        url: "https://lh3.googleusercontent.com/bVksLu1bgHLFSpWcTxXz_kVVRBgTmEabYR3JaJZ2WWv4r-EKnPKwSAIByO3gOIU2PzT25tbPMsef_5F3TRRO_CBGiEwxpKl8Ym1fsH8un_-FmBt1QmOzhVHvgOZDAG-r4OWQGVMGUM-nUtZ1CyrZzKYDVUr3SZlk6gQNNgth_mtEm9CVM6e393ar29SnpqanmQk7VyET_utocpxwwxMvydASWKFj4ZbYP-WqwVx0-7aWDrLD7JG4VXfV3Q-_BfyY3KmI_vgRNx2vuZPx0i4VPbh92HOy7yLMssK795ZYzglBOhMf4FxsNTXHysl3aJWbnzkEwjaI3JZQhCFYVy6Sz4tiLqf9918aX7QMLIuif2J7rEqZRpfNPRsI2j_MPTqcJggn9sUYnpHLyYTUkwW5rMm6Zsr01qjiWVSnndT0j-zXdTBk1Tm1TfOFd-DHr84yIqWJr6Mw0qtCrsMpSX3K-kPWnu5NviPcTXWdCNeLve34hCuNgQBHh6Ek33V2aeNbWNv_nt5k4cYz4nrAPL8BuoPhk5cjlJR8huHUb6w4Jw6LVCgDvFPSF9MJ_jWNosCNLNLP0u9oxPc3-TjOOGcUm69vmZ_SxiK2lwJ66g-6xUqYpECRc2pjJJ7PRiPlF52P2euDqyLmNOM1edGUI6gRvqEomKMS7IOUwposXOxXIoftQEdoEKPoLri-Tj2Rx4Ws7aaZPaVSAlkwiVs4OsJM_jk=w490-h625-no?authuser=0",
    },
    {
        id: "D&G006",
        marca : "Dolce & Gabbana",
        title: "Sandalias plateadas",
        description: "Nuevas sandalias en Nylon acolchado con suela de micro goma",
        price: 5513600,
        category: "Informal",
        url: "https://lh3.googleusercontent.com/A075ghO6isD8yTR48ZMqPqXKL5LyMXav6KCc1uc9YNEiBgtpnDhOBFh2SPpMfm6msgCxE6sOjLKklQPdcYEx4VMXRM6nD2PSkV-4GQbvVCyb-hrFpup6fKakNmGYmIEevNEs3kE1jC7nNrdrGA22yoZuGdgl388xfp9ndSmz0Wu_41H5TyLxdCmbMJ_iPkYKisu6mWZV_HvASBy-Tq8fm4K-nntdTW62ECZPTYN9YZEl0izLPk1qNRaF-Bp7oSC-XOPM8E73MSyDiKVEa1pJnMG3UhSL3aBNqu6FxnpDAfp1P5dHKjAGrhH5g9pOWUwEdYq8kfBeSnMIe-G5WtI85knOuY2m5iEWnBF2ODhjRxVc-Xs1F6m11bnaTkFoFavXKhIGCnPCc2A01Ko9wZK8WPR3gQLOU_g55YFaENjz0B1n_Nw1s6w_pbRKRuC56y3mtJug8kNLhZFmbTQsNjb4v9g9jzjmGPpsFzpJTyESCo6V-XIr42YbMkcrhqG4c8Hk8DaPxRPtIhHcdrE4YSTE4d29nA6qT81u33pDGxesw5rmZnrCyREFDN4KFeO8ZEYo1obW9DXKEa_J66nA7-9BbJyK3eVbQuDK3DVa5ds2TPsHVse9_cb6qX_FIhQrKNMjFDHcvaR2KIc2rHlSHAXoARMNUzssSeStH_ovurOSGXN8ofnIFOxndm2M8S2zbaVxJ3n7Idz9Ftam1m-zM-vhakk=w490-h625-no?authuser=0",
    },
    {
        id: "GVC001",
        marca : "Givenchy ",
        title: "Mocasines negros",
        description: "Mocasiones de cuero de la marca Givanchy",
        price: 3975000,
        category: "Bohemio",
        url: "https://lh3.googleusercontent.com/9nk6XEsvrWR05EA1vOLUqLcbXTkxDp_gZHmOzgvCx6-_uzvMIcKRp8wskEBKM8kPEs66TYeMm12KBryjNfE1MRQKvfvr_LyrNlfSN_5KmlhUpvZZlkQQRtZg_lfh1LnCJkt70I7iFDV7Z3JC6RRuk2ejEma_WR5sKmquYIxG-Ifq7n6wImJUY5BNla4-Cw_ajR-7oj60NMlACmYE8V9dVCHAkyb0IpUlKimlss-44rN6ge8hwvnKbzg59P6YQYyrjemwaB6YA_yj85h2WrEhEcsy-5kD2_yKtSQ53GtqSZcH0di0aKbMHJV-BvcdVoQ4zErr5sjdAOASRer9oIIpW9KFSY2eEVvr9KP0xJFoCTevvfd6k3YjxQVW0EJP2qvwgu56igOBiQjSrrLxfOyKODHxDw4E7FpgCIM_f7ms9iZEiCWchmqBNcIVFOUXKGO-GnIxGy7tLw13zNrrsDyaPa9W0B8QVhaw8BqOsHvAnsRaNGQvxX0rZJp9QIcZ4-rRZkK-EjLpLYXIEOZ-KdC3Rilow8K343UuuTg_wq1uQTiDEe2rkVKloCluNHO5cmt9gHIZCaYGtnM0IILW6LH084DAzENXp7XquAxFD8vz2imnypEvmN5DJZoaojlYLmymPjpglz92lB-ktz-NBP_fS7xHyQFbna0ZocA3FczkXL5tv-Al7JT-_oo8m1cu3P6Lvw5q51ufuFLYb9yXnEBhqKQ=w469-h625-no?authuser=0",
    },
    {
        id: "GVC002",
        marca : "Givenchy ",
        title: "Sandalias casuales para hombres",
        description: "Sandalias de goma color negro de la marca Givenchy",
        price: 1500000,
        category: "Casual",
        url: "https://lh3.googleusercontent.com/1ICX8zW2Y6B-xGjG_egEKizL9w1JA4y9qO8Bm4uogWkavq2yYydJx4T8iMPL1hm29U94EhevnfiPj90feXJm_-sSLoPzd-jMmJRjOKFHJtjU0XJdOb-3RvIrxiRm081uGWOMFsSzIkvLWwvz0nO5RUQGwtmCqPXKX28JbwEKdN3cBzyPbfnPRfCWqdcKfLDgM9S1at_5q4UzVW9iXn2fjj7Vt1jpy5IMiho0uK8OnAcwSP-IMEFVT5Ilb1RP_p-rCpvAs99cIrf-5-KgVC4BI3CrRlQEvNe1G2E23MC33nUVjPK01H3h3ByGoyV3avOPh2wdFu-BagfxVO_o9O9TKYD4GBaY6GMuXQGh-ya_Fdq6yZ7SKFHn7tbt3hJvNHoQip6uVj9YhVAm4FraspnEsGvkbkF1YC1CHbniChEwxMfxsiG7_taUEHuqdtfRYRp4Y-Xrd1NxlKBJzR6aGdHL2_0zOocMirOdUwbmBwmgwJylhlQ3eFcZB4TR-fBLGnDCaH6jk3HzeKkPLYyd9hemZ9d5eHC-UHC7ikA-JPh8piij6_JiG9LyCdbN32RtDpa0kh-fm_nPCE8ejGpU0_2gddxa5gsQDVxEet6ay5GXv6g_eGY3yjPFH35_owTCZlJhKaupKMQ7EBigqxp4j_1BUpvJ_e85AF7LACkcDtdKXOTaoDtHwvqHTAnlzxuiqCH8WwAh1It9RFkEVQRNzPPfm2U=w469-h625-no?authuser=0",
    },
    {
        id: "GVC003",
        marca : "Givenchy ",
        title: "Zapatos deportivos",
        description: "Zapatos de uso casual con diseño aerodinamico y detalles de cuero  ",
        price: 3695000,
        category: "Deportes",
        url: "https://lh3.googleusercontent.com/cx3MCIseXwgJACk248eP-wG1XNxbIJni8ii5whEu5w_gpDKGmDd3qkySw-55RpkGDn7NiKnKykX9BF7RNDAI2d51l1lxmcEAHjCbiwVD7xW_dVnhjPLUxM0zxohxM7tMlvxyA-JYdL7vzUeiHbOPikPUPZ0qwcJgtAN0Cs4HAWmAJmBOFD6Su4GRXOuWtOoUbNNc6h6FzI5eXYL-ZmB9zLXN9gQAQaDfFJ4bqyCfGPzUo70NCeVQw9RNb75_oiRGkH13dOR3uLhNj8NkIgbrm2svrkPXtq6V8VxAxN4EDc6oBDg80GoX8yQIsEhXxXw8OtPTBpu5SznkCsbl72WpHIabAiQUKOjakQsio06H9EuOaU6xeuRzJ1RAPNDII-4njOmC1XrF3XUizT-JJ4b0zqNU5sxQY0-RSIKEvC5tItd1zjUor2SN--cWMZGqtCkOibFojgu6PKGDoYYpp-Dy3zo_GNQpO73Ve95Sdt6xLkW37-0ulvxhQmmw2Co5g0SaK3yXuD63Tc-2ROL6Ch6KsVuBO-qv7gI6M_GRvLMXTEYieXTrR6R6IM7rhQlxkkUBro1ZG4hrfO69k0wENLUJsFXucrNRsg6iwjXMBvRZHeaRcSxYHmDzE1fHWt7JG0BW85GAS-7kaTh29BA8sOAG1RR2pH4U6dlty1zd_MS73_MDrQsQOkPEP0kf1jW5RIZY5C2OiQYQWO6MmikJdEFa6dw=w469-h625-no?authuser=0",
    },
    {
        id: "GVC004",
        marca : "Givenchy ",
        title: "Botas de goma para mujeres",
        description: "Botas con estilo futurista elaborados en goma lisa mate ",
        price: 437500,
        category: "Moderno",
        url: "https://lh3.googleusercontent.com/A_MEVfCOMrIJjwXSSbAdMCZGjIV4B0RnZumQJAwOZHnacYAaAoBJI9NOaDREvRakpTqruT7IuI0eqYbgD5Qn_5ezSduiw-yaJ3ATpBjnldXN1N-65gwkwt0XH46Zxv543kcE2w2-9B1fXIZ6zjtrZ6_aRMDTTC4hmnzk4LUZhGIH8VbYp4yghdClrRA1fG2ASKIsD2bsV2exc6L9emQLu2luprB9PDpmGwYOD2rqCoGXoYa-I1DGywMlhDc242qEwatuMYxG62cD1Hsp5sJEvUWrjbn5nvIwHRu3lufelbOBdeJycvcD3-kVU7Qwtct7F28n14RHDG9OQu072j_xLWODGsL7ncFp7pVCp6ajrGF6GEvlTSU192c4XCUu4_o5wmf4CL9UckDqTKGDjkaADIRl-EAOEJIqFF1o8aTGMjBe0-WBAaAGegey5tM28q1-EVuL6B7ht-4ZHqxXw2TDPIgd0hBqSUrUcSefPWsaGAHfP5zQvsDY3tnwf6_4Pndpf_v8cEtvY2_RbRtSUqrcYXEu6yj0yXRzUlJ798dhh50peAmX9AXbBTGxGYJ0-ntzp2aY5cJCs5qLnnTJubNS3A7mznjO5CMyuwFT7GI4atmTkRHjaQCe6sQczWXJEi0Q9UiJt74PBD-Xnyda4xdkzES6-rjusllW56A0OzzCy4rmmGpT9hRg8uO_hR1gzMpWGaHmR7o0lvZjcCzkXYRQ-Nk=w469-h625-no?authuser=0",
    },
    {
        id: "GVC005",
        marca : "Givenchy ",
        title: "Suecos de gamuza",
        description: "Suecos de gamuza con adornos de taches metalicos",
        price: 437500,
        category: "Moderno",
        url: "https://lh3.googleusercontent.com/Xql4bNUzt5iqRxsnoNeAr499ftIGLyLnssObOj_KDTDdzwRxEA5n2nuX3b8E9Zy3INERh881v8t5v7d5MptAepb9BJOmfaOOmN4NKqKGxEAhqIZhPt9p5alVw6PrUZBrEWBGb2nL4opuOpnGMzWSiIOrrsSRBJQq_AfSx-6QD2zE5vivRdk-iNPCo4F3dXBd1nALh5J_4NukK3o0dbnpkQhdtLYSi8bF0po0-njmYHUP44AA7IioiM2ZM9rk0mkIpA5_DUgNRQJxdUSJsUWSkBIFvMFZh_cK3CP9Lps7FtVTPtgjdJSjgapWcOKBuW1-EYWh2SRTB89UGKegnBSoZOT6ihPzjLpm_sdTgskha8nShmjNyLHwVer0ylpvu73im3GQr26DVeMYx-DNMeLJj2UEv0LGB143WbXcD13txcTuXaFSAk9GJCkorRoFL6XA8kjdeTR0FcxNt9pFgKyD1qAuespzvKwszpkhmrlt1l4j2GQp_g6KF1dBtUfka57YJggatgUaI3Dtf0skwopKOTmKTyvXjrI5CxES_lkHcLTNaq8bnLqhYfXW6t-Pi8Wb-15hPw6MLgpZetVOortpQivYlydqNR9sX9jag8kpUBgTst4R1-XxCwJDPsID-S2H1CjIv3sNHk1BjohzTnNNONczjEnw6AutNMReziG34_nCPrr4p3E5Lbi_U9T3yEwHf6aD4Ga972UD-kf5G0zrru0=w469-h625-no?authuser=0",
    },
    {
        id: "GVC006",
        marca : "Givenchy ",
        title: "Tacones altos",
        description: "Tacones de cuero con adornos metalicos ",
        price: 6370000,
        category: "Elegantes",
        url: "https://lh3.googleusercontent.com/-QqdqoZrthkcwJupjLHvfnhLs2OEiDtt3xx9KQ2VUM4NlrO3tjFOpd9WBlX8UA1HiUxd0VDHsTQRIYACM3b1K-hf8ITxJOsrGfvmkIw4j5VCOXdpfyfvXhTRJSJQE3XEaPFfycuYRg-B0xObNlNZhBO49vGXzKZnwovxeoU0pq4I9Xtl5o77T1_OxSYSn85_ZwcbS7x6I44KhIrkgfjhpVtn6J3d0KQQCuIanq37rIpy41nL58Sp8BlC7CgV4Fc6XIIzF7Lim1m3mJkyJwdY6dPvx7Yasgmsdh9-t43lVsRHruqIInI6dsaJvw8ZwOhiOGEpp_4QJqN2H0DnqNPsJApkgC8eUrVG7nYNGPWzblzUHgF_S99aNhPG_ry1l-L96ojfbDBy_tG29_ITcdm1bczhcLde2CtjziJRxXCWIbulk4RYaYAyALpHViO4iuE9f0Z7oCGmBrCbwXRvqBHkrWJLOTn3DZfVRTlBKRyI0ejksCvIR32S6N-mUFsn3wY0MXlUyFqsCIhymQjLbNLaJXV4mjZrdTsZZamuHS2MbaC9i2RVYo6kGpUm-w2z1RF3gLf8Pok66DHMBC9_3KQZ2fbZFsBLVc22iaiuv59tKnY2Ap8gv_Kgdt5aDSCH79HhLfI6R9KOvtX8XKtXlGck57imgNofhLF3_uMMb6Xx-z-Oqvs_QX6W24cajS1-z6DvNxjUcoKJHyzK4ZFTiDDX4HI=w469-h625-no?authuser=0",
    },
    {
        id: "DIR001",
        marca : "DIOR",
        title: "Mocasines clasicos",
        description: "Mocasiones de diseño clasico en piel de beccerro lisa y negra con contraste en beige y azul ",
        price: 5550000,
        category: "Bohemios",
        url: "https://lh3.googleusercontent.com/rHFNWEMKABEQUXkxMx4lRhCoAlqDnTGO6tvOEMbI-kLlq50ALqum0WKYP2Gm-cbaCmix5TxyskGGCFbLsKX97owD3q-R071LRLO_OhupEHApmy0kL8Yim-TYmNGCjT0lYtXt57aYtUr5kM-S3qAnTtqlyz-utsM9XosUxYxr2wg1pXrmhzDsw3TELcYPdHyYMksNfaZymh5bi2tQiQgenEd9DZMP42kBBRH4FhBzXkM37of_BVattyXAevy2-HgqzTBUDv_4CpRhdJ3EG0BjEzgqe1_D18WEgHoBkNRQ4Jv_jUl4qeTBlHUjGkLf4Ng5fNv1lK8SvRHiHrNq6krc1CexP25pygAiFnYy4Af-9XP77nXBEbqrLC95YQp77T_WxPSAOqnR7CvwV8YbDEbesBGyWsNnHiTkX-zVYuZuj_Vcq2l7XuH6EV7HVwW15PM6Kv86xauiZnzyHq_EalqFAdcIew8KlvQUMXzqEllyjKgLSNgVkrZ-szqa1n7ubg0sMUGUpRkOyYsGTakEXQZGZjdfRBg3Lqg5nvkbV-myCpNV-XjHW6EZO4H3tXL4ryRHcex56Syn1fMryLorlF-DbYDQwORelfc_HVOfe7X6iuVbAXVELvMPTfrLoiBD_e8k9FQOWv97LP_cfZFpjdPnmW3fqnmEFa6NYKTetUnOLfDI7fFzyRFIDOLxvhyywnvWiY-4fRbqR_EbnejQcuItrVc=w934-h625-no?authuser=0",
    },
    {
        id: "DIR002",
        marca : "DIOR",
        title: "Sandalias para la playa",
        description: "Sandalias modernas y original con un diseño calado para mejorar la transpirabilidad elaborado en piel de becerro blanco y goma  ",
        price: 3201900,
        category: "Casual",
        url: "https://lh3.googleusercontent.com/S2k-zL2qcMzoKFbYg_C3IyE9LMBrbf7_Pd6NwJWmwyRhRb1vzzo0CgcCEneJaiT6BIIqKDhbWpXr0euIfzsR3LYLabxQE9Ut6wLZMiQbYKSHZo2kVYS4JZheIZmAwc6ncJ0u8b3dU6xCoY-VC0EWPFN2M9KYNQ5cscvmm5PatyPDhe4gjiT4S2iuqukrR1gBr0H7lMEz1w9lqo0mTUDpmj8hvoWqUxqJhEfHL1Y_--aPs8exj8VzC7fRT4yR0Z2n2qpJ8ySu6H5ndp1zBezNLtGIlYycEuCkR365Ypf05Cz0495HawhDd9r83bXvr-Z4klHtjmkwPFzS86BFEOqGqiTLAJk2zVvl76sArXPbOkTFm0lmGOBHM8Nd9JQrLuGqUs9YkvZe2YaT3m2AeyV7wYQG4AAo1jRhdCUEf8brQ9kjdmNUIlLc_uVndsv0zJAS8BO7yB3WVwYoRmEI1QjO5V0gQBkjILVaVlFGr9O2YHpgpoV0YM-ecrIMMuh1JbpCBZny1eCgm40UuH93RpiCcXSnYzXcD2axS5B6N5sffRxBDbN6ZAo24XFsGq0Xft08a-gMihEWSRd4PAbETaUKubVqVrjKQ3mbzcA6hmf3zJZXKOzyMKUERTgMpdlB_jaDI9UyoQQWiZC2eUvyAnKsI7VWuekEntlRkV7HBsLJ_bif0PZgCfu9cADtdx5JzwPbEhK-8ufVpQEaMalFDzvC2FI=w951-h625-no?authuser=0",
    },
    {
        id: "DIR003",
        marca : "DIOR",
        title: "Zapatos de bota alta",
        description: "Zapatos casuales de caña alta es una pieza esecial de la colección elaborado en jacquard y suela de goma",
        price: 5550000,
        category: "Deportes",
        url: "https://lh3.googleusercontent.com/1SpKvP2eXGVTf5xeviNTl7xNRKoGP3HMal3cLgm5h9cOzk2hlHOgG4l2SZepUMkwzZE8uKf8G7VazJH2nd5UhgzistiDmpw9ktGY8tZxI1u0f3PYuoPNlUX9RgKamvKvCA-4yNJMvCLQkapgzDVEW8pgDnrnPmNNNU05DEvAw9ztZtgWfryijWY1O29isnQw-RISahzZRyKTcpKP3Zbz4J09XezTCSZz4mGM4CznWyAptBVk0ydO_-we4YGFdMKLo6u5PZg0KOG1wb6RM3689NOiTkAZC8NMGAjfLaJvdMmnp-oFDCmuEuBqhHr4yshjHFoZe6ntYJYL6n1t4AIXYOh8OuMTrRUhXHpy7G2QswX5p7FrN89Nvrr9NLX1YJN2COP-OphRlMzuOhhL2LrzkNnQI4shoYCTLpPIJMh45P05-4QfB0VD6-8c8-cojlHwKnKnvvBdfHTU2vH_i4Qc86weGpb0d1eqQ_x0aS9sDAbDnh28kwnoZR0SOGWnAlTNEjzoZMA1UVMa1YMVsn3UBWY6BGz4joAyoCZpHwVJQ4dOn1TMpK1pSDDl9mY3LmueRdwXFPGvcARU6vgDNNsWbesnB32gLVj1V4zxBUAHWxQQjSgo7HZBSsEHYrK-mvZdCY7wEj0FdbvFklJh84mk5krraT7I1vLosOewF0X3gnMAelt3PV7wnjlAKHHBchQmemTKPf8ewtQCLoJlcsO9oR8=w952-h625-no?authuser=0",
    },
    {
        id: "DIR004",
        marca : "DIOR",
        title: "Aplargatos bordadas",
        description: "Alpargatas elaborada en algodón bordado multicolor con suela de esparto elaborado de la forma tradicional",
        price: 2749900,
        category: "Bohemios",
        url: "https://lh3.googleusercontent.com/joPxXjxv9gtOblWd-JkwwJCPN2lTQEnlD_wabv2E6mIJnfVdOtJcoCqUvULWWlPN2XPMTUlbOPrOXWNTmzQ5dNN8UioejofmKZMUD2NBkeT64-1flS_RtzKBWkxhm3jVamDm0fExY51TpV-Ix9t84Kq62Lyu8DIgXIpoBrVxoiAWoAzNBV8Q5ptziOpgrZXd9p0RSQ8YS5lwzKDApfp-biX9G5qS6mbAidq0QtEUck7mB13sc_QWNSrT9WXWi9qQOv5xPqUnyEgnJozgmwh0rML_sMTCR7JlSyQJH2Co0kUMPmrqScFg3IOfNvqtlYOrofwl9UM4Ots52twiqXSJ7c8bDsmwBm2m4aIUkX5jTvy4sjdsJpDBpSut7WFzqlY-u63ry6lQOiTlkxdaq68utM8Kwr8a7_AKsJ1Qpa8lw0GJRJLb7JlPa8zy1SV6gYXPMAs9oAAwAGI6Fbb0nPB5sQeE8GSaTWnjd7cbdwrdvk73XFQMKjyGoAr9DKUSTbCQvGHm25qCU5WOi2N8mEMqcyiVU9ll9GvU4ev7YXxsIDOetEsyqsskg5rHb_167cSLYjWPk9LRNsje7aq44-JIiVzT3zUzx8fFNVjUAq3mrWNz-UprSk6wowurWklHA_HGBSvvw_SJLn8tRWecFRcm1V_Oaat0ZhH4izHrSGsNKcWoDRY2-xv7E2uBjvnZH1baLfFANZ9693A7PdgVdXS8hz0=w952-h625-no?authuser=0",
    },
    {
        id: "DIR005",
        marca : "DIOR",
        title: "Sandalias con el logo de DIOR",
        description: "Sandalia de diseño moderno de piel de cordero negra con una forma anatómica en piel ultraligera ",
        price: 5550000,
        category: "Informal",
        url: "https://lh3.googleusercontent.com/ayMG7ZS-ZQaoQpwHmV5HQEcnvX4L7Om0GgMWPlt8Yjhock52q3n0VW0hoQNDl_ihfBkQryhp1IppnHOLOXAyxybgm593gPf9iyZ3z3XZb8LGgxudjwHIHSRa3Hs5ONCQ1pkwLDM3N4HFNWQ0IZaIEjqg-lJtg41iAX6ru_cfx1lvAv1ly9GmzbHUQT7OMBeT-dqA2PEHEs2kyXrWSVQhK14IA3tYIiVUe4N6SVbBDOMdd7ESBnCqfoK75p0nvgsnd_siYlY2EtnteSyO-VFFq3mXbKaLaqCR9Kv7MDtGadZX0hU-ehBawjyANL1vQPuk7shjTX04yTLJdoQWd6XFmqc4TfMm9xFAcO2RoGPKtcjIDGa62-3Xco68fQgRxfRFPtBs_k6H2VqPGSutJeMe380MaeMTd4vNQxobjHomtTBR4x96v7A8DsoFfbpnbmB_ANG5rwz2cRIPwZ5rjMH9x_t6yxLf361K7X69UlR6_wdME2IxDk9mjIde8iZbxBxqUJ6yIjL7yls6rNelXBp0HM9IY50X49FUxIu437HMeJ8omN2UCI7ikD_wpjHYROe7U1XjvApAHmbdpL0c0cTpvM_JieSG0G3VcbbA_8m3fKSxTLU7FUQcKmbeO5GTvxuHISOegWgTVSU8fcMV8dtUUgDbxZAcTZGLWG_PFw8aJiAwJvxS5RSRgTtad2hCS88AblU_j4SHA-meVZm77jpNalE=w976-h625-no?authuser=0",
    },
    {
        id: "DIR006",
        marca : "DIOR",
        title: "Botines en malla negros",
        description: "Botines de tacón en mallas de una estética refinada y moderna en piel de becerro ",
        price: 5085400,
        category: "Elegantes",
        url: "https://lh3.googleusercontent.com/xqDAjrxLEomezAi3g2DJZv4FBH6_1slbj_3LDVRAtGGSMMUd7uBu8pp4CerXAxun8Zg-goc6j54CvJboAZ2Upl4cRm2Auz1BiZ6AfpiV4O3b9MXmTq20ItALx7bB0B7yLnrj2QJGks5JcD1dGy_yi3L5OBM7uGu75pFLw6u-cGJoA91UYZHw9XdbovpWBI-FZCis63-7QXqs5A2tVW-MCCHMQOoXnBXeUaVg0vHXs67ChaZKjNlJ2JVXrb5j1OCidJjHUG97H293tcFq0cusO51n2xxgK31j2eMRJGhwxbctH-mZbvZA5GFuxNY95jnv0ckMg3f7olijMnALKMsbkeBQrV-4xyHwpJkcGRO4hHuW4EtkutiwU27FN39tDpzLQPv04Flq1zET8qn1dYB9oQ5JSCAFoSQ9rErqKQKDozbG3deQM6DBnNviAS1QMk7iSB8dlRNpDOKKdngGbQsu4C8U4hzJms7UcE1B5eSeZbhoIOoMRpXXsK5iFl3Lm2PPtYjSENZQ-Kjz6HnFfepPUaoLDmRwT4v7FIW62sTEw0j02DxWaFU2rctkJgVYZMRIDxJ4DTXNlo8jEylOI3YH-7Xky8XcoCO8zJ2dl-jUloqsMwJW7SYURCa9lg9lmSGeCuK3gNsflo38n2umX_FZo7_KqcYgUDsyALIeQkCNgvAlhEYpv4gPTwDrRsWzg3TOBjq4aKsZ5rzsbipRH2PoEl0=w967-h625-no?authuser=0",
    },
    {
        id: "BBY001",
        marca : "Burberry",
        title: "Botas Chelsea",
        description: "Botas Chelsea en piel con suela de goma a contraste ",
        price: 2605100,
        category: "Moderno",
        url: "https://lh3.googleusercontent.com/VeGWYnJ69mJhfNkqXWTIx7g5k1nvx7zdCq_Jw8HIDb46PSYK5yu7q7ahP5bt4SnKuEUA-l9x67zU0s33Fean1smn1TSbNWLIQ1Qr4zGqTRj-gTiUY3dJuhvXkTzYCx7qNh7aWD-XCJftmOPHnYP5pL67_PPguhh9VYr-grV2I3xn8cncVHY-vkzrywgSSMc3UpwQJXA4K0SWaYVWK1vq_-fjj5Exa7US2M1zC8l8q5WMMlUG4YycyABbL4XZj1tJeu5livJu4N3I_RH1x6HheFklvmkCxgzWUDUttDIyZhlFAkWZun6qg5QrM1bn2Foyml6Kofy4MmBc3DwdAvJ6uYwftSfsJad9f6SlzgDkNn4Pkmfi280Oc-jezcaaPBXGiQJq_j41A7Q8u3BqOeGnD25t1KK1lL-WBmWO-H02OHIYbTstqx1NVEwZobaoJF3UaU7oJEA6N3YTloLYwDhDdYH_kpi4BngK7LYoGZklF9Y6nWwq0Stxbpysp0YXksXldgBh0WT8s3eGFWZzWkJ_urpMkylx9Akn0_59NrdMF8hbONbrEfvtFOZNpU4CEO5M93GL_vk_TzWz5poL7yo_baSPyai1LIXQAs8iBvh4FzgS4wpPp3orn6OqyfuYvb_0glR2qImGU57bN3SesuEUZq1EKG_QppZTPy9GUy28xLGPpFx44Iu3cpmXRTqVPcycOcWaqE3Iwych93bVvAhjZKs=w641-h625-no?authuser=0",
    },
    {
        id: "BBY002",
        marca : "Burberry",
        title: "Zapatos estilo deportivo",
        description: "Zapatillas deportivas en algodón a cuadros vintage checks",
        price: 2995800,
        category: "Casual",
        url: "https://lh3.googleusercontent.com/KZ7d_YXpGwbDKtQFmSu8N2sDxg29gwVFuW2YHDUvapOQLy4w55TvCKHstpzMuDXokaPjYxjRdYhTGj3GIOqzR7NARJ3EVp6d9HAhykU_ef_KA28jlHWpG-zFjFPsQ_evAyBNVkWfEtQnqnwQVGGXkgy-6BeQWH67lYm6kmZBQOKajbTkOy-jP3giH0dSNT6YV8kk1CPZoBht_bU-WOk5aV33Fq0YQCbj4xWP1PtexMXwx2YlOvzcauXH7skIe1PUBkAL9oda96kYa9aee7J54xNjf_6WwcBy3_9RC6BBdPbpG8pw6qWfdH_salFEhMSf-TsG4A5MDGrQxTo5SgWjrd0k6snhSymt0QsB4g-BdT6xej1QZKHSjIeL8heyYLsZCcWtbf2a3KA3-oQ5yMCVpTueRUxzwRqLcGIqcBb2-XiAGF0HFeH9qmgFddM6LHmEdHKc3Ia-3N-rrFxzGRxflLi8E2jX_kbkLIClvhkbd4CgkLC_6aoqSQ28OydBbzQ4vrgeRR50C2NGEveRvBbo3sk4oDhdDWEB-_l86tE9B_MLwNecTYpVHcLrXf52llHjBAyUYwElV1uvpEF_dW2syim4HbUEe6mP8n3Zl1Ob3AOYD7cDcDYmyldRy63ygZcYFpjpIacE7ApEtA3JCRJpXWQQRuCoAgNELBrk_iKpkNY8_HMAPdTjh8en3oy6EVzx16zvc991tmEz094XDuFt59w=w674-h625-no?authuser=0",
    },
    {
        id: "BBY003",
        marca : "Burberry",
        title: "Mocasines antifaz",
        description: "Mocasines de antifaz elaborado en Italia elaborado en piel",
        price: 2127500,
        category: "Clasico",
        url: "https://lh3.googleusercontent.com/SKCT_wMPhXuD4doLOqzZm-YK5LqD0t3UBZWhrgX4CMLTIvbIvgot8hBQ8ceuN2_ngBeKfQn9ISRGUmEk39MExJZpsFo4bTQs-X-KRtD7l1iB9QVigix9PbJC6FaKRSKy6H7yznPwi56xrFdOqzHy3QtVSJkS2Fjv969P4xF6nVM0FouYo798ckCTh7qpXgEGgaCHxl-Azquir2xtJAILIQkTRksUo8yClqmqSMzuUGurefc8rPxv4aIP_MzA7ZeKiTVbPzxcHszGkscMBVkCyAuX2ZtTyMCQRhjUYGnoAihUZufwdHig1Y75bfHvUkmsMMpYNzThznxTD5cO5Iq2sLdANzTBx80SyLw7pHl95BMjiIiMFEjmYN-FUIM75BwD-6sFd67qZimghBPNcse-KL5HYrMob9JICZQ6dGRq_PjWHOnWXKOnzhif6Bj5jZjN8-wuITVMqMXsUYcScSLuZjgBZ-6tm8xzrqbwKsX57WkoXoo3udtIrnjnGtX0VV-2EaCK8R7B6ywLxu-CeiCBXLpVqgZ-_DjzpTtMuJY6elzDTRjf98xSQDpVBq3uJy_LR1zG4p8iF_4G5CqqR19MD_2glFGDatNdVjfW2YBGg5hDl63OifIt0XUl6HF-3TUKnYQ6iJCwevWGkbp_J8g9bGIPaN4gV2PBorzoVztwHunmz9F_mBix2mIDVfdPSXykqpg5KpUuEgwte9HBhz_m0QE=w632-h625-no?authuser=0",
    },
    {
        id: "BBY004",
        marca : "Burberry",
        title: "Sandalias casuales para mujeres",
        description: "Sandalias en lona y piel con logotipo estampado",
        price: 2127500,
        category: "Informal",
        url: "https://lh3.googleusercontent.com/BIOMFxPX9eH-tyCcwOZT0bBKIthfz-y_3BT0-yRqQT-aVE5FXvryv_qR26qzU_He6QJFqDaZMafhFoSd_Qs182FK0CZH9lIPpjV3RuvK3QHAfWonvnSj__vURo0dvo2kXUXlW-6voEttwRQE8CYizxPP58LUEo-5Pjx3xWEYGUONYrRskThRPbZY8-qcjd47XlSfqLg_zqmbcRskUFNRMJI0Psx60FsfEQgM89Pqt_mvWAYzJN1_CjIr1mlzDXxR5hqU3jLrYIEksXvKr8MqHnK6IALafFzj28yywemy3YHUOQ0AhQjJXP1V-rHA5nwL-LUWqq5D10HkUirVMumRmu-6m1j3icEvIqo2KrgYnJpErPGBGAQ7fkyB2u0LGgNbvmw5GaeOyWLCEnwM-est00yIOefVXBx88y__9zaPV_m1rCXXFvY-RMrxVmbl0-189tNVc3GqrFI0QaSoRTPon9McJfEWtGubyB24tG4yp6mqmqnGszQhPJYhgngkFvU7yXma0VAj8fCjod-besVPxnPtui8_h_loIt8NOOvyCixHwKQrIuwN28VgFaAfUL8Tllica_Ir2ESknAe4kUAk4v-P4vfEnvKnGgN5YN5G9TDVATHvxbg6gJ_bM10NsSX2BVFDqd-VqR7HIAoVr6vmcrHIxPC8Xh3vTiX5oActXZTmoyAhoRxI4Id3LquBE--AlaK_4EiD1rkErGD6tCbydXE=w699-h625-no?authuser=0",
    },
    {
        id: "BBY005",
        marca : "Burberry",
        title: "Tacones altos con cordones",
        description: "Sandalias en piel con cordones y tacón de aguja",
        price: 2995800,
        category: "Moderno",
        url: "https://lh3.googleusercontent.com/NI0R0v9lz4svAQYqIMWO7cyEzSZ7GgCZKrPuMWQ8qL6_DPhjcLhLi6-PJB7xnU2DR2UPAM1A7SecFR8G7nTT-KBbrE2UHsSs60gT2dt5CpzmRl06StAjO8SHcaRtM8VQUeZGhhkuFVowmEcDPTpIQulViwR7I0aw6FLpZh_c4k0O22niYO6YPH-zWVxjPr-mjnW0dNJRlFzBKHXzcRXjDIjNFYbF01ZoVTLG0AmV7lUmi_PdUWWK8qoofJiqERKF-1ilFFqpeSkU4pXOLbpQAyd5ExENI65EMUHl9HVGiiLxYgsfzWjncwcQnd9Y3kDpdePIZC2PRDFxJerIjnDbVfQSkKYXflnKAYh7EFzXX_p7G3vC5OhmRLol5hyceW1Eix6dBom1bOPC7XQwZ4RDlxrfu7sdpWiFSybhh3EoqpCjOxIDpVrHFfgX3Tk0QeqIATSgQYptjVBuK5qNNVmiTos8yoGQwqjSDTzGu5TZDPd-fuFuyvQUHrmyS-i2DKYPQa3VVYKAn_FQb6pvQcJ8O1a0G3LAPMl80K5hq6SpuJFh0UXNLLrv-2dBjQ7IGBpPAFFREeusoMf4965JnJuoMiDkylMJotxeOjsIyKuH8NW3CfDqH3mFOaGEWDqllUtRFg_7pPqLtOxxgRwOgSPsdFO56cjzYD-l1Av7_STwiWas1C0o6_3bt4tv2GQNCIe1I1wKcxSsJrawWLRB_RTOJbc=w620-h625-no?authuser=0",
    },
    {
        id: "BBY006",
        marca : "Burberry",
        title: "Esparteñas de piel",
        description: "Esparteñas en piel de ovino y suela de goma ",
        price: 1606500,
        category: "Informal",
        url: "https://lh3.googleusercontent.com/yOprhTGUWJ_ChciuOMOztJr_fFBMhXQ_Wq1O8-5fzkNSe19tcbjGb5V-Y_xbazW6wRZYd0v-jp1ztj2JIe1fVmF3XYt-XKyaG-pKjbTa355L7DhkYgb1r31xn_FdH3SQHVlE9OJDUbEgLuuaY3rSkj_IlepxepT0o5sQxVH5VJZnKH9ZukslfY383lnM7bvwtMjRVZ6H-QbZxLwfj3DbQLGFOqRY87ato49BXYjx-hXyoaALuo9g7uET2oGIGB7QMB9VcToLJkUmI1a0_VAl0SxMVWz7NfXhlaVfHo4zqkCk3RnpbRCffefo3YK0cHbXbSUJM1jUrEGyOJw2rtc8aZLndMSndz2jdo0S-FahyiOssgCMYAu8V-XGliIMeheq5vwdnYEtgykA7wXcG3HuDski1ZcExrbW83KEjQ3u5qTZn64kY8Jd8Pu9C0buc4x9N9OCExg_k5u-fG4sOoYB8MSDph61n5b4B-iSUjRDlke1tzE4ph1AwYlnEITTYPxnHuz2TCVVzNFSCt-e2QIzetasNDqy1BnpiQ7BUcoMyqk9d5qVWttba48zTpnFWocUGmu6LWMA2gTw5Of1arZFX3JruTSrc5tB9KGt-rZBBq3qtDRf1GdBHXt8qmcCaHfYABa29ZP7T4kmQYsJP-8-yE7tmNzJlszW9zC8mxmm-XeSOHdmd3vaJrrImVMD7ciIkGNSC_lB9iocFyRQn8TBhf4=w677-h625-no?authuser=0",
    }
];


  return (
    <Container>
      <Row>
        {Zapatos.map((zapato) => (
          <Col xs={4}>
            <Zapatos1 Zapatos={zapato} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TablaProductos;
