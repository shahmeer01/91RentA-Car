/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MessageSquare } from "lucide-react";
import { BRAND } from "../../constants/brand";

export const WhatsAppFloatingCTA: React.FC = () => {
  return (
    <aside
      aria-label="Contact via WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center group"
    >
      <a
        id="floating-whatsapp-button"
        href={BRAND.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp message to 91rent a car"
        className="w-11 h-11 rounded-full bg-[#141822]/90 hover:bg-[#1a202c] border border-white/[0.12] hover:border-[#25D366]/40 text-[#25D366] flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
        title="WhatsApp 91rent a car"
      >
        <MessageSquare className="w-5 h-5 fill-[#25D366]/20 text-[#25D366]" />
      </a>
    </aside>
  );
};

export default WhatsAppFloatingCTA;
