/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { ReviewItem } from "../../types";

interface ReviewCardProps {
  review: ReviewItem;
  id?: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, id }) => {
  return (
    <div
      id={id}
      className="bg-[#12161e] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(200,155,60,0.3)] rounded-xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between"
    >
      <div className="space-y-4">
        {/* Star Rating & Source */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[#c89b3c]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#c89b3c]" />
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#9ea8b6]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Verified Customer</span>
          </div>
        </div>

        {/* Review Text */}
        <p className="text-sm text-[#f8f9fa] leading-relaxed italic">
          &ldquo;{review.reviewText}&rdquo;
        </p>
      </div>

      {/* Author Details */}
      <div className="pt-5 mt-5 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
        <div>
          <h4 className="text-xs font-semibold text-[#f8f9fa] tracking-wide">
            {review.author}
          </h4>
          <span className="text-[11px] text-[#647082] block mt-0.5">
            {review.source} • {review.dateRelative}
          </span>
        </div>

        <div className="w-7 h-7 rounded-full bg-[#181e2a] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-xs font-bold text-[#c89b3c]">
          {review.author.charAt(0)}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
