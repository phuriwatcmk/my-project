import React from "react";
import { Text } from "@mantine/core";

export default function DelCuponForm() {
  return (
    <form>
      <div>
        การลบคูปองจะไม่มีผลกับผู้ที่ใช้คูปองนี้ในการสมัครก่อนหน้า
        หากลบแล้วจะไม่สามารถใช้รหัสคูปองนี้ในการสมัคร membership
        ในครั้งต่อไปได้อีก
      </div>
      <Text className="mt-4">รหัสคูปอง : texttexttext</Text>
      <Text className="mt-4">ส่วนลด : texttexttext</Text>
      <Text className="mt-4">วันเริ่ม - วันหมดอายุ : texttexttext</Text>
      <Text className="mt-4">จำนวนคูปอง : 20</Text>
    </form>
  );
}
