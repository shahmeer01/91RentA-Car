/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import {
  Key,
  ShieldCheck,
  Clock,
  Plane,
  Briefcase,
  Compass,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { ServicePlaceholder } from "../../types";

const ICON_MAP = {
  Key,
  ShieldCheck,
  Clock,
  Plane,
  Briefcase,
  Compass,
};

interface ServiceCardProps {
  service: ServicePlaceholder;
  onInquire?: (service: ServicePlaceholder) => void;
  id?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onInquire,
  id,
}) => {
  const IconComponent = ICON_MAP[service.iconName] || Briefcase;

  return (
    <div
      id={id}
      className="group relative bg-[#12161e] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(200,155,60,0.35)] rounded-xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-lg bg-[#181e2a] border border-[rgba(255,255,255,0.08)] group-hover:border-[#c89b3c]/40 flex items-center justify-center text-[#c89b3c] transition-colors">
            <IconComponent className="w-5 h-5" />
          </div>

          {service.isPlaceholderData && (
            <span
              title="Structure placeholder — Replace with specific client offering"
              className="inline-flex items-center gap-1 text-[10px] text-[#647082]"
            >
              <AlertCircle className="w-3 h-3 text-[#c89b3c]" />
              Service Outline
            </span>
          )}
        </div>

        <h3 className="text-editorial-h3 text-xl text-[#f8f9fa] mb-2 group-hover:text-white transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-[#9ea8b6] leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
        <button
          type="button"
          onClick={() => onInquire?.(service)}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c89b3c] hover:text-[#dbad47] transition-colors"
        >
          <span>Request Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
