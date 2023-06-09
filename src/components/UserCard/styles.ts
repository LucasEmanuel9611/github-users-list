import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  width: 280px;
  left: 112px;
  padding: 24px 16px;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const UserAvatar = styled.img.attrs({
  alt: "user image",
  width: 48,
  height: 48,
})`
  border-radius: 50%;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-family: "Inter";
  font-weight: 700;
  font-size: 20px;
  color: var(--dark-100);
`;

export const UserBio = styled.span`
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  color: var(--gray-200);
`;

export const Bio = styled.span`
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  color: var(--gray-300);
  margin-top: 16px;
`;

export const FollowContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 9px;
`;

export const SocialDates = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  gap: 9px;
`;

export const Container = styled.div`
  width: 280px;
`;

export const BlogButton = styled.a`
  display: flex;
  border-radius: 6px;
  padding: 10px 24px;
  background: var(--purple-100);
  color: var(--white);
  width: 100%;

  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;

  text-decoration: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
