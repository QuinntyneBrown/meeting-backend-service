namespace MeetingBackendService.Dtos
{
    public class MeetingAddOrUpdateResponseDto: MeetingDto
    {
        public MeetingAddOrUpdateResponseDto(MeetingBackendService.Models.Meeting entity)
            :base(entity)
        {

        }
    }
}
