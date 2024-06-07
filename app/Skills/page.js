"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="skills"
      className={`flex items-center justify-center min-h-screen ${
        darkMode ? "bg-white" : ""
      } bg-gray-800`}
    >
      <div className="max-w-6xl p-8">
        <h2
          className={`mb-8 text-3xl font-bold ${
            darkMode ? "text-gray-800 " : "text-white"
          }`}
        >
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3 lg:w-2/3 m-auto">
          {/* HTML */}
          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
          >
            <img
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
              alt="HTML"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">HTML</h3>
          </div>

          {/* CSS */}
          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
              alt="CSS"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">CSS</h3>
          </div>

          {/* JavaScript */}
          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png"
              alt="JavaScript"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">JavaScript</h3>
          </div>

          {/* React */}
          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUiIiIA2P8jAAAA2v8A3P8A4P8A3f8A3/8A4v8iHx4iHBoiHh0jDAAiGxkiGhcjGBQjCQAjEwwjFRAjBAAjEAYLwOIGz/QNudoIyu4VkqsdWWYKxOcXh54WjaUeUFsUmrUSpcIacoUhKSsfRE0PsM8cZXUZfJEgNz0RqsghMDQba3wdXm0fQkocZnYeTVggOkA8g5PMAAAYe0lEQVR4nO1d6ZaqvBKVJEBAZFDEWdS2ceq23//tLtiSVCBAsMXzrbvcf/osj0IqQ1WlsqvS673xxhtvvPHGG2+88cYbb7zxxhv/Ela/b/3rNmQYBD76hR+6T2pRf+gg5Jy+vg4BQuHgOQ99DFaI1qv9QiOGFo2Pq88ecv7cHtdBh2081ijVdZ1qk9kaBc9o6yOwRqdY0w2CsaZhjIlh0mk8R479+CP7IZrHETVvz8yAsUGjpT98XqtbwAtiatwbkgMTXYuv6MEGuegwi3RSeKaGTe2Mntt2JfhrzdAkwIQuklHYfkl66DIpddn9mfSIXq51UEKljbl3+spz2jXJQ+cpJVVP1MyF1+9IkgqMElrZmkxGg8yCUP1xNvqc6pU9loFMH5gWf0DwWSvgTUa8RJ7a0yz0Ma6eEbmIk1euxf5Bvl5EGc3oE6lMrWCwkcmXqmfhU3M26lwwBjTmKwYTU6ep8TKNshKkk5PT9Kw+2uKiysqeqWvTaaSbYGnS68uMf5Do7LWGFn8ehmHv43u1xyVNT8wlqjeP4WlSGMDM4hyTa5j5SeF8w5cnXrxsnvoaeyudjZxMy1m2F45Sa63pBX2oLw41w2ihrSH+INXDqdfgD+/94qKfKfuCvn2R5Q+WJhPwW+jW1OO67As6n5hJpS3z3L04gKkt3SLHhd8ZjBb5A3H0okFEUd4qPSm90kWn2BTXlT6x5Up1tNaE3kjX7bzsD/UHbMroZ0Xt/Dd453wVyhV43+/FptByoq0latBCK2EAMR2vkUyXDC+09oVPB9rnzddPcmNg+adjofGr0kwdhBMdfEUzo2/kSh/XQ5P8jfT0ArNvDfNVSDaVPWqh60LwUfR9YcsR/ERwnIm5qvYP7I98EI3lC3ZS3jmXkH7VGIIBSggUwYhOcIWNLoLPoI8Pfs070TjfTI1fME2dzb3hTeYp3AmWDpM5F0L02zN1W+v8DLd5r+pe99MUTbHijEmNHRxGTLd5l6AYurVmrcm8PcnLl6z5WbFWnwfLyhtHPxo38+FpbAJR6OwmooX24FOcftr4IDTJu3XWYsfyGNzLvXVYU1gSfTSD01HPNrL9cAzsJcEXheeEq/tPyKRz9ztY5u/aK70LzTGYqeYEef0p/GCxU/HE2vXr38AUjep8Ge4WYE4a4x20EnSjtL/qWS5bG1bXqoZZX3Or6EH10RHoFWLyWYtp2eurem3uKZrrrrdQTJXqV+WoIVpKIwLYvCgvqlHrjn0YiDlQO/Xpgs6SIAzRvtQdFL44OvdqvHw4zDZL3rnioogk2rUYDa5M48aowd9gHe62t+VebXgQN0qasfDaxMaHyV1dkU2de/cE2B+5hNN2atvdRXAUyXjUKv7JvGFFI/U47HUuYVsf2OtDR0ZrGcNmBrHzLaI7Nx+UkO0Pfht6bPfzwfrR97YFl7BlX6JJIbQRt/r943OnLQYPSog2piaCLts8wL7mEnYdUnxwlqJV2ebTcwu9/zoJH5stzlbm1OhX9fDn4GWz9CFrMVxzATH3SzE+KZvER1dHezxi8e0DD/aT6Q8PmONI+ZDR/WTWomN7aPVZ7FJVQivgth5ru/CDj6K6cfPySA05duzT9BCLtKl6wDzaqWHy4/aCOZ+zpqrNCLjX1rFf2kP5JNMPam4Xirmd0NeZbvGB3qFbtQYzz7v7QA1a5FvRuVLUC6rR3D6gGY926x9qj4lftntquRV1P7gwdMWiiXvm4OBIKQI62rPXdn3C1m4rarlcc5rAFUXsxExR2/Cpc+k6YBqwrajKkgdahkBnpN/jkusrBRH58v/pmnXC1bZC36MZ0zJYE5iGHpy98+aJx0ILtGtVCty2ZpM/hHahoFGABsK417QUuVva/TEwN/m0SUVYPR6cKVsFYEVIo6/JZk7nTlsPrIjGyCXgpMgsO/zvWUO7w1mb1f9H8JBwUr98wCKUDpIFtA1d15sef/8ycwhsb0N3enxDgTXLc13P84Z3pP903UEIv1E/5Vkc+gWna/y0snYv2veGfISMz5/1/PJ93m63SYr0z/n8eVlfTzNuS/bIrpGRq9IXHOQztSaLCVu2FzgjhNDhuocnTLpulqFDdpG+/NjdyOJDt2zweGSh+6OnFCj3uHSoavqpaAi51/My3i80qot8EwUYOjWiyXGWXA4IjcLhAAwWP9J7Cd2EhQXvq95yM7r+z/dyM9ZuBD5SiuCr4kYWN6k53cfJ2k7lvNNm/WO+9rs/Au5BVbMfZcLZ8+VmQahpPC5ZSVJCUkGjyez8g1DoWfxs7SWkKBZgTxfFfHmMqIR3+SQ5DZPiSXze9V6paNJZecrfh82uhANiYmLSXC2/iLpnM+P0MuTvq2FhPQ2ugz6WUUsJMz5zurRE3D5s+SCynyO/y5WYipdltChwvHPRzIwhbWjRdDGe7PfH4ybD8Xjc7yeT8WIaYZOmplKatyEXUcfHszPqRsh+iNYZBbhevHSsABMBX9ZfO+ee+TXyUziOk/3xR6P7p/3Ddb4EJEXS9AJiGvvzyH+68zZEP7OI1r0903x6quE3E7Bl8gdNGXZW3x5wPme60vaZ5TFrBSUm2cxR8ES12nfQdlw9OW+yGYvj6vyRjpfHFlfqa6o937LgbxA6XZJ4UmuFMKHRsifl2z4AG51icNpQfFVqmfez81fmUmYn83w8MFYm9wRntsug52HqJWUJiL3L8jiVJTncH2/ox7VqzkodBui6rxm+xex84t5VOpu/eVu36ls50C9aPvtu3qCT+RRVbyd0cX40T47LN5/U5Ftlk0rc2DncdrVxkq0dGylDtHlugGqME9aj7V9k7KP1WCJfOjPZ7t0UBRzFuebHRgtGUa8X8iSVAquTnRymtkcyYbGZyvjgXLVGP8XcCe03o2Vz3jHekBD5tr/YHNWTdrsAHrUp7KyZo4+jj9lUsmBwxoF/JG818OKSfLcU0cytYDsoUV9WNrMZ9g/oHLiA2SQlMQrR10oiJKbjj9YZmH20LaWIEhOnZuiWy8y2pMI0HQKV2EwgLmDEAlcYg6TwAQvm6Fk8306FzDJpi02jm6DdcpTlW9HJlrkS/QOfpvzJPB/KaMcl+RUxkikbPknzAEaWDX00i+bL0L5bDKMs3wrHB7ig2UkJUJk+HwWtZY5sBu/CZwDPc2DhWRjaG4zcZXEgMT0Gqhpn4BTyrVKdnPiOECDi05SxMPsnnvB1fkSD82McHl91P3NNqgvnlVaQ5UUXyIDS5CMJgp9IWIFYn55LSf98G2zmMVputSuj9KmzEgTDKlKi0EX34Rgdi5OUwc18kUJmmBILqZDNksr3LbM3PI3lrjXdtWySAaRKwp1vl8vkfEVoKJvFYJrfN/OWy1KQJLxSG30VZhvdNy/GQha6qVXYU0b4zNUmW5lyNeOmOnCRbhoMI90zGpPE9SVN4e6LuQwLb5GSrm10FXOkzYXboMRFehbRZ6MK57LYu0OWs4dxeYAstBaqCaReUbwruwTc3GByC4GzbqskKNnoO4KUORLtanccooC1+VZs2WGcvRx0f1LqlGGv7B0Z5rI8ozhF04hHiklrnpi1kopYM4pCHQFcn2/lMS2XeW4hy5yV9LYvZJWADuwVd+pcJI0e+j0/Jw1oep2XO/qagmEk0aDyu0IdAXPakG/FLBUeIytge1h6Ka7bygITRDuUvstkyvxBh0idwxJsFINXkEqP0YZ1BOimyZtlp5ap7kTs3+VNk19dYAJrh8JLrB2zVPTqMD2jfzYYc3QB+w6zioAM46AK2SzccyOxz/qm5JDyLF6ZiFEx2uKs2HQfswYpHDkFJ5BtROUbGx8QJ/RPFQbIhDUgZnOr2H1gbyuDUZp+3Lk12dpWoXrZMCXOlGUo93/YHhTrc5XTcp4vyxWJWdQIaF9/zFZy8BhHT+ObG6X8HAtQyaUBBtAUelGjAyCtODxGXDAv7rxmjt46pzQBy4cGikE7C3AfaJk6BfV0okhS5bomby4phkfFHAQZSoQH77vYKVSNJNizQmaUJTtwbnrUUyG4+523dlUYfNBvVSjbT+7/VX2jCsAa0BIXhpkeHs5rRmGRYVysAxTG9avw1paix1mc2U20Fvg+FtAq5UdxrSFxuioxENtyd5dhFygcxBmr0q8msF8wbsF75o5scX2DiFarPAooQbqzL/y3tWucpDK9N7jCnxmzFjQo98J2zIWpwekHpR6tAy8FIB1Clo9VB4k5Fwax1iUtgR/5F+Y252+2y7MFBqM8hGB7VwdaWmZQQbXMAeM8isKWmVHw9Xa8sZDFa2Sjz6M5ddAP5V0UV2F6u7gkT8UspC0wCVslv2YkKOYJSUpWMIZ9vYRl2q/3XYxnqKIyMYMRnWgjm1UAmIcSJaw2hhIKCViIejtid5BU8DT5Am33QHAwJOltQRFVS1hyoaAybUn08qsqIrAkA1L0LGvBN/qazDLzc6MaSHpG0KXyGFQVOMG3kC3BXExM2tQnRBNc29RQQUKyL/YpCExqLQ7LM/BZQwurm/e2MVMfxILbWV6JzY639FeCT5OuU/UEBLZqyt0NYmXqD+Tu+u9TS7ZbRdWUFE3BF2xTZIAzr8ubZr4TambO57DsgiIpDYe1a5ymZU1SHHj1heNxDVWcpFlbuNpXTplbFiQsuzXs3KF6CIvK2ytVDlXdDIBMHNni9WMeNNiqbYHLHILSBpGHqypQzust70cUrb7l8No+shNaa8BDRvRbRdtwP57VvLgH4wFAfEs+hKXY3Lb0VDWr3/d5upghJTEGIK5JVYovAxIMm4u3YLz4rWndPNVXxb4EVRnPTDUoGAzX5QJWJTdAJa0QL+VahBz73DstauL+qYZjaZaaDo4Hxoh1XLPBCA4wXnqRRwWsPoidNVdwAsfAaxRXd7f3URkxNUqL0HIJj7QEzPI3BkzFmHelqvSu0Acb9xqyfphxXSCrB4LxxQ3m8EuTT1R9Ujp94pSjzIpUxyRE2MLxk1HjyYZnoPkI/qw7UOXxoswfdfjxbTmO5/bGkipKmJZTK/sHTo36ssHORf+uObhwDrCcGJnKDl9zIOF4jW7C6mHk/syNUsMJbZJauBZKiuxGTBcfZZsEuAA3bejna7hmhzFAS/hsMq2vbS6IeCOpVH3dZydfx6ylPBiPNYk1DcKMHnJvLyYGHX9KzrZAHPH3eIDFJCoD+320ngpnwFNJVpEo4lYoWEknh5H00R4vRzm/LTzg2Mp8dytA83hMblc6RPvlQcoO4Mbe/A2wNR0Cl2rBmmOn0av2L8J8Inrcl9F/mGnJHQ5A+Knw3QcOQruvjx8PjQLpF4Cl0O6dVHuQbzmDQj1ftRsGgi+hOqxmkNmwJKPV47utsCBznYG2+nZlH1t9wtfyfcRqyBiWb88MkfmjWtXH9cQKv9k1AH1fbBh4c149ArALyyfdKuAn3FwfW14FoWaATrEhshSJtlbd2lpoWaB9GUZ8EOoY89NRbrS52X8oe8cFW581e5ecFDVE62OB3YHp3mvRr/5HVHCYCZ18ojAfSB6uBzsbi9P0pcqmAVzNwCAwJLbdXYmBHyaLInuF4G07iqkrklRuz9Cj1elO1+K2AUYfQb191conHCE4+4WWoUBOtB003xhF7iWmx17rFOjR16LoiGCDThI3E5JpFdES85M/9UDBHVaPqRlxkwkJpqk2vsZl/iw2p/NHbmmx0VYrpVlg05wkPTRkbCEhggjinHqLXIQMYCsmLmKXxcj09TqW5O1gAydVtc6bMPRXRjmSREw6ZlqvECJHG6Zs1PNJMkD6bEERc1eCyMj6htHqvpcinF7xGoDf5rP+LriL1gM5QTf4UdXv+qjmHDlV8jOpQ6IOy+8VzY4wnjOEnCEwxQEv6EE/1YnCSJqn0fdChH62lXyV1JtfDf4m301Gx16V12MOwxxvknWYpZf/Rmi4Z4M1KU1WBmAKzaVzky3LD//axhONVuW9E32a+M+5QMgK0XZRmZl3u2dmup9t13aW3RVyYpqhfLbJTWHqzaTe6+jrvDouTL06SQ8b+v7y15wniCG6bkhNEYHf5ENtfJwlc14Kgn4q6VML1ghZLTeTSK9OWft9G41Wu0f1ZxVs39lOaOVs/X3zrWAAuEZIOwUsf9RJEf4i+6fj+/c00uFpDnNIjYYs0lta0vqp+ZUMQ7RbjiuXhbQ1+i0JeDyZ7I+bTRzHswzp33izyXKBx9NIM6mucsiYd0Aq3uUJdxBWId3GnpJJ/UCWpBQSuQ3DKKRzt3mWdsu66rh+SypkXUJgx9A7zVVnMrJ9Be66oML9LSbzRM26kNvTwKtSRbOxoZvPK/ghES67F3OT/LAiSq+ubZJqwmtys8pPLGxyE+1mfszFZjn3kJ/5x/fP/0F9GjtLuz5dMiuWKkXzD8Vp7pLllnV1yw8PbqmIvMaQctXUP0nIwojr3CG13KzAkP/1ncT7caRnoqqXlriDZBUmyHSyWW3XvVvuO9hDO2wH9dX9VZY1daKySkrZ7cCn63eyBBcIpt5rBgPgXioKCLjfXr7c1DdwAq+cEcILQ3Z++QOIslVXZbZsb+jYoNZXcjlvk2SZYrVaZX+WSbI9f8/ZAWGqtUZDt7rCBKu4SeLuVU0l+a8AUDQRR04wHA4DiOHQGwLDSq+1dpwX2e3+Jh2uaBpr7oHCiFIVCOq0mqv6hnNV84IqQ5yJ2sTGAmVYZYURQbZQY9zK4pWiOq8qyD0avYnH0z8B7kNpIwWOYzHZNWlI9X79M/h8ac4RCHjmBDZ+xIUG6+/S78aB4Wuj83pmnIOrcFkIWIrFHC5Y21OhvtULb9LhlURV2GZAjkLsGMiukjDyupt0eIE/JSoWrFEKGRKwxq6hcn8AY1WWuZrPBl8QShsZUMUU5FNB0ofCIuzBi9c6v+ORWWlFDj3MIKWXX2HsnXxka8BvnejcIKKKeH71D/j9K9j8yMbd8jkRTPUEhxmp38zxLhG2vrMLaBusZZnkIBMSa3WVZ4Wn5POadiyhdWo9Wywb8vm9PrxUR/HegBQo33e2TJdojUduYXG/wJ0dC1jUQPXuhx5c/x0X+HzoZqkApHMTQNDSm8p4A/BbCTsurM+1dpuICazVABh2bc7fuISt6zO1w4M32sCLSthoTtucTLNdftcSspSrlnfYCRfk3sey12a6/eclhDbjV0Dy0y7Bis3SjmNR3ueDElqhyPfW1y2ZDNGrNU3r2uF9F2YZmIpFDRjYFrjN/aePYPDw/YfOGlZgaHv/IbhnquPd08O3dI4+Rf6RqVCzCoBfB9511JuVUWhZwx+Vbs8zxk4LpfjKvcVDV9rI7j8k0526NmV2+AX7Q6291raEe6u5iC2uPOa3I3R/sxw7QWgqbMTgumN4QMGXIzZVbo6/ofWF54+DxWmUg16OwKqmMVCpyrRlEDzp/FYyHvRSnC5oC5kNdIWE253pUa18LD/S6zwizO9+UFJqNtrAJZgljLk7OKbG9KAw7dx55ZHe08Gr7lAFGrAj1IrDv0l/trcAfEdsnJstI08171yVCsVDmhZiHy2hmcdk/WthLDQR5D46TUqLF4R9wfkhUzWN3ekcxjCrgUSHXElY4tw1ogYSc5/VmO7+ckAhp792mrpoKRDEzLEHGidWGsR049SpSJ7+ZHR/QAqO8kgpI5ajmHCVWglxmEZzgW6U5ZBVKklryOsnvkBCwJEtlZ9jTRqdxOKw2NyWihGcppBfjenkp2qq+qxWwIvuCmLTtILK3R/tYjFjwIi+ygrCHom+HKGbnTQ30j7whK9X0Glg5SS6LVt9Fx02IkMzVZa+lC6JEpHmSMz4JLmzAtTvfQnpK3Nr2ArT5+K6sEN0KZabJaQy9d35ERerRrI7K8TUPQsSGjqOd7N38pQDrCesQRn/66NUER7rk1213RRLq/7O1enylN3Tdf+C3+O2s1SVsTOEoB6GOU1+bmRm55psyvcIEZLUmzq0LuaQYYMu4s/dL0X6OiP8XAcrXR38FMDSFWmDyHQxzdjn5YQduu81rRy3NIw3SinVpuPJAsO7idpcevJX2D9iv8vZzKoJV6MPaTJ7kSPd6hDgzwhLYReJfJpqwpU0h6z0vOg52SOqkAVeRPnIylGfVEO0rLyO6P5ATYXQ8EwUE2mL47fy2sU1w2BVJyPRDt273AWgb0OeeYFThZ+MWk8pK3RKd1awR0qKm78AwU560Y6JN+sHE5KC1F0wyxkr2DAkBepfAQut98BE3O5ijDafSO6iKcEducne0EHSU9ZlcaPJ6QwD1EuO0+yGPz1jn29S49+4XW+ANRyN5qv9L1lcp+Z0843+nmL4pwb5CJ0+rh+HMMu1fM7B1yAYZTcKz+frA/pzlz0Flm2r0mLaPNR1n//UN95444033njjjTfeeOONN974v8X/AE+/jMBGGa+AAAAAAElFTkSuQmCC"
              alt="React"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">React</h3>
          </div>
        
          {/* Tailwind CSS */}
          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <img
              src="data:image/png;base64,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"
              alt="Tailwind CSS"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">
              Tailwind CSS
            </h3>
          </div>
            {/* React */}
            <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img
              src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/yyetqsumqfztsv9im2fz"
              alt="Next js"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">Next js</h3>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;  