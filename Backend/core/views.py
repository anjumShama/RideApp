from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Ride
from .serializers import RideSerializer

# GET available rides
@api_view(['GET'])
def available_rides(request):
    rides = Ride.objects.filter(status='requested')
    serializer = RideSerializer(rides, many=True)
    return Response(serializer.data)


# ACCEPT ride
@api_view(['POST'])
def accept_ride(request):
    ride = Ride.objects.get(id=request.data['ride_id'])
    ride.status = 'accepted'
    ride.driver_id = request.data['driver_id']
    ride.save()
    return Response({"message": "Ride accepted"})


# START ride
@api_view(['POST'])
def start_ride(request):
    ride = Ride.objects.get(id=request.data['ride_id'])
    ride.status = 'started'
    ride.save()
    return Response({"message": "Ride started"})


# END ride
@api_view(['POST'])
def end_ride(request):
    ride = Ride.objects.get(id=request.data['ride_id'])
    ride.status = 'completed'
    ride.save()
    return Response({"message": "Ride completed"})


