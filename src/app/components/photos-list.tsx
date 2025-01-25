"use client";

import { AnimatePresence, motion } from "motion/react";
import { faker } from "@faker-js/faker";
import { useState } from "react";

// icons
import { FiPlus } from "react-icons/fi";

import AddPhotoModal from "./add-photo-modal";
import { container, item } from "@/constants/variants";

const PhotosList = () => {
  const [image, setImage] = useState<null | string>(null);

  const [images, setImages] = useState([
    {
      id: "2bfe4014-460d-42e0-9037-f54ae4edf691",
      image:
        "https://plus.unsplash.com/premium_photo-1682308336208-7f3c19e6a96b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWF0aW9ufGVufDB8fDB8fHww",
    },
    {
      id: "56f424d2-87f3-46b6-8c82-6a7330af9e4e",
      image:
        "https://images.unsplash.com/photo-1597089542047-b9873d82d8ec?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWF0aW9ufGVufDB8fDB8fHww",
    },
    {
      id: "b02e193b-f80f-4a78-b5ac-556715de8688",
      image:
        "https://plus.unsplash.com/premium_photo-1665657351368-3e2a50a3853f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWF0aW9ufGVufDB8fDB8fHww",
    },
    {
      id: "8c176944-ff22-413b-878e-bd5b9a5337a1",
      image:
        "https://images.unsplash.com/photo-1622737133809-d95047b9e673?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "9b2fe4c2-242a-4416-8d10-d25a682dbc35",
      image:
        "https://plus.unsplash.com/premium_photo-1681426472026-60d4bf7b69a1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "a8485df1-24de-454f-8481-d625716f1148",
      image:
        "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "3cc80491-c0ec-4d03-a395-0d2d9b628bb0",
      image:
        "https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "a607f5a0-95de-4a23-9639-72c6a3e8ec5d",
      image:
        "https://plus.unsplash.com/premium_photo-1666901328734-3c6eb9b6b979?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "e1bf23c1-7998-4e79-b210-3349f9d3cab2",
      image:
        "https://plus.unsplash.com/premium_photo-1665657351648-e63266282d57?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "6d3e377d-c999-4b0b-9555-1e656ddab6bb",
      image:
        "https://images.unsplash.com/photo-1516900557549-41557d405adf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "34dc2e14-f27e-40ad-97af-66d86a66c533",
      image:
        "https://images.unsplash.com/file-1635990755334-4bfd90f37242image?w=416&dpr=2&auto=format&fit=crop&q=60",
    },
    {
      id: "b6ba48dd-0175-4404-bce8-c90ac35d29db",
      image:
        "https://images.unsplash.com/photo-1634689033402-a132c62b310e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "a8dbfa6e-1ed6-4bf4-aa8f-a7f926d302cd",
      image:
        "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "07437aef-9aa0-4210-93a6-772db8ee5b15",
      image:
        "https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "0a686f9c-5d65-45ab-a453-1929ce85dbd7",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "ff16b269-3b79-47d0-9eaf-262f14efd55f",
      image:
        "https://plus.unsplash.com/premium_photo-1663050756824-165ee7eafdac?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "4d49ae13-505f-405a-9203-2ba6355dccd1",
      image:
        "https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "a9a18321-c3e9-4d51-9f72-530d1d7d9acf",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "6c8ff897-55d8-448e-9eef-f16165abf369",
      image:
        "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "9e70a5a4-9217-42e7-866d-c7af218ec90e",
      image:
        "https://images.unsplash.com/photo-1628313388780-fb046760ef1a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "17641c94-7d10-47f3-b1cb-e8519a776e2d",
      image:
        "https://plus.unsplash.com/premium_photo-1665426466624-2c615f3b133d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "8e135df2-6561-42ed-81db-9ac0fb9c9701",
      image:
        "https://images.unsplash.com/photo-1618303085702-e2f951c2ee55?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "a04da68f-6194-4902-97cf-5ac22d113602",
      image:
        "https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWF0aW9ufGVufDB8fDB8fHww",
    },
    {
      id: "abdef573-d728-4d1b-8805-ec717de5d799",
      image:
        "https://plus.unsplash.com/premium_photo-1681426604528-ae470ae9314d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWF0aW9ufGVufDB8fDB8fHww",
    },
    {
      id: "70cfbb32-b767-4481-835e-cfc478c660e6",
      image:
        "https://images.unsplash.com/photo-1628494391268-c9935bc384d5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWF0aW9ufGVufDB8fDB8fHww",
    },
    {
      id: "70db6e19-d7e3-4f26-bc2e-150dbc2165b1",
      image:
        "https://images.unsplash.com/photo-1622227922682-56c92e523e58?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "b3e5f64a-43d0-46c7-80bb-cd95dae3fceb",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "bb3c48d6-f712-4d75-ab8a-c1e33b69003d",
      image:
        "https://plus.unsplash.com/premium_photo-1685045985004-0eaadbfc609d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "608f58ea-9a82-4208-bd9c-46dd9c70b982",
      image:
        "https://plus.unsplash.com/premium_photo-1681426552959-7a2f03c41e07?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "1bb4db47-6478-4824-b4c4-8e24bdd76e21",
      image:
        "https://images.unsplash.com/photo-1517328894681-0f5dfabd463c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "318f4054-8354-49a2-bb3b-e891fe88a1ec",
      image:
        "https://images.unsplash.com/photo-1625014618427-fbc980b974f5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "5ce19817-9eb8-467c-8843-0fe059fc0248",
      image:
        "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "2b4f7d8c-bcfc-4b44-beb9-ff5a49574b17",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "765ecc99-a1b5-44b2-b6ce-2149ca766b80",
      image:
        "https://images.unsplash.com/photo-1627012441283-79151a20adf6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "8554c408-eb06-401b-8d31-25c011117523",
      image:
        "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "06146149-976f-47c0-93cf-5a75f422f147",
      image:
        "https://images.unsplash.com/photo-1600242035009-ac25152afbb0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "9bbcc04a-aa3b-43e3-b485-e6d06f5da651",
      image:
        "https://images.unsplash.com/photo-1613544177363-eb77bb535e44?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "6d2fdd55-11db-4fe9-8b1d-d851bc6868df",
      image:
        "https://images.unsplash.com/photo-1632425422799-286dc4325dbb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "f5840056-0bef-460e-b001-b29da5548adb",
      image:
        "https://images.unsplash.com/photo-1611262588024-d12430b98920?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "bbfe4fdc-d311-4ac8-82f1-4a72154e8f2e",
      image:
        "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "eec36e15-893b-4b66-99a6-dfa3adfc38da",
      image:
        "https://images.unsplash.com/photo-1593501590743-ac451d2f6d35?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "78b386ce-b2c4-4d3f-ad7a-665746eadbbd",
      image:
        "https://images.unsplash.com/file-1715714098234-25b8b4e9d8faimage?w=416&dpr=2&auto=format&fit=crop&q=60",
    },
    {
      id: "f0cf5b2b-854e-4449-bf55-4696b2dcfeff",
      image:
        "https://images.unsplash.com/photo-1611643378160-39d6dd915b69?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWF0aW9ufGVufDB8fDB8fHww",
    },
    {
      id: "be691c10-4c88-4c61-a31b-b4ac5fb31d26",
      image:
        "https://images.unsplash.com/photo-1568176579502-3fbc3aacebaf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWF0aW9ufGVufDB8fDB8fHww",
    },
    {
      id: "f9db4c59-3f64-4809-a082-6c30b08fc0c9",
      image:
        "https://images.unsplash.com/photo-1579833981331-676fa2bae313?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWF0aW9ufGVufDB8fDB8fHww",
    },
    {
      id: "c1fbe3d0-a55d-4e55-915a-7b16d24702fc",
      image:
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "24378542-4de0-4c4e-ba0f-c1252d0d6dfb",
      image:
        "https://images.unsplash.com/photo-1599056377758-4808a7e70337?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "506e8993-d6df-403d-b93d-7656fdb38d02",
      image:
        "https://images.unsplash.com/photo-1565700430899-1c56a5cf64e3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "a9818a1a-388c-4639-845e-8b17f45b94f4",
      image:
        "https://images.unsplash.com/photo-1630207831419-3532bcb828d7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "1e26c168-bb6e-4812-80e8-98405fd7f97e",
      image:
        "https://images.unsplash.com/photo-1636716731103-11242116065a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "4086ab24-dd4d-4626-87f0-6f527fd96887",
      image:
        "https://images.unsplash.com/photo-1547194936-28214bd75193?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "c76d4456-f430-4b25-9f26-ce9054d0d2cf",
      image:
        "https://images.unsplash.com/photo-1627163439134-7a8c47e08208?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "b339b6fc-e31d-4690-90b3-c3ecdadf9f16",
      image:
        "https://images.unsplash.com/photo-1631582053308-40f482e7ace5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "60763501-b6d7-4b87-b342-228d442c82f7",
      image:
        "https://images.unsplash.com/flagged/photo-1572609239482-d3a83f976aa0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "c5e7bdcb-fb64-416c-8631-585ae39a5372",
      image:
        "https://plus.unsplash.com/premium_photo-1683121608285-247e2467c764?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "288859a2-3997-4615-bd53-259212ca5d72",
      image:
        "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "dde59c03-6ed5-4af4-a56b-7b4f3c10ea52",
      image:
        "https://plus.unsplash.com/premium_photo-1661414561433-cfeffc4430da?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "56153e76-f1cb-48a3-bcd1-e3c5c40226ef",
      image:
        "https://plus.unsplash.com/premium_photo-1665657351153-32a6f43adb93?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "4d69eadb-3fdc-4adc-a836-5408c79d1eee",
      image:
        "https://images.unsplash.com/photo-1530625243345-797b4c1836ee?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "a870a653-afdd-46d0-9b47-ee072d1362cc",
      image:
        "https://plus.unsplash.com/premium_photo-1666900852769-714859977030?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "47d4e062-5b3b-46ea-ab0d-7fce73bc5292",
      image:
        "https://images.unsplash.com/file-1720553250263-3b4f25a93c9cimage?w=416&dpr=2&auto=format&fit=crop&q=60",
    },
    {
      id: "5fe98516-da6a-47a8-a54c-384ce58a3c5a",
      image:
        "https://plus.unsplash.com/premium_photo-1665657351654-3d4fcb68335f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "da3396c4-f36f-4d7c-934d-c6c819806a40",
      image:
        "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ]);

  return (
    <>
      <motion.div
        variants={container}
        initial="initial"
        animate="visible"
        exit="hidden"
        className="grid gap-2 grid-cols-3 p-2"
      >
        {images.map((image) => (
          <motion.div
            variants={item}
            initial="hidden"
            whileInView={"visible"}
            key={image.id}
            layout
            layoutId={image.image}
            className="rounded-md overflow-hidden h-full w-full aspect-square"
            onClick={() => {
              setImage(image?.image);
            }}
          >
            <motion.img
              src={image.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {image && (
          <AddPhotoModal
            image={image}
            onClose={() => {
              setImage(null);
            }}
          />
        )}
      </AnimatePresence>
      <motion.button
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        exit={{ x: 100 }}
        className="fixed bottom-16 bg-white text-black aspect-square p-3 rounded-md right-4 z-50 shadow"
        onClick={() => {
          setImages((state) => [
            {
              id: crypto.randomUUID(),
              image: faker.image.urlPicsumPhotos({
                height: 200,
                width: 200,
              }),
            },
            ...state,
          ]);
        }}
      >
        <FiPlus />
      </motion.button>
    </>
  );
};

export default PhotosList;
